<?php

namespace App\Traits;

use App\Events\AttachmentEvent;
use Illuminate\Support\Facades\Storage;
use Tecdiary\Laravel\Attachments\HasAttachment;

trait HasAttachments
{
    use HasAttachment;

    public function moveAttachments($attachments)
    {
        if ($attachments) {
            foreach ($attachments as $attachment) {
                if (Storage::disk('local')->exists($attachment['path'])) {
                    $this->attach(
                        Storage::disk('local')->path($attachment['path']),
                        [
                            'title' => $attachment['name'],
                            'disk'  => env('ATTACHMENT_DISK', 'local'),
                        ]
                    );
                    Storage::disk('local')->delete($attachment['path']);
                }
            }
        }
    }

    public function saveAttachments($attachments)
    {
        if ($attachments) {
            $files = [];
            foreach ($attachments as $attachment) {
                $files[] = [
                    'name' => $attachment->getClientOriginalName(),
                    'path' => Storage::disk('local')->put('attachments', $attachment),
                ];
            }
            event(new AttachmentEvent($this, $files));
        }
    }
}
