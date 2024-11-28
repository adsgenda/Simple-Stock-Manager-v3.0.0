<?php

namespace App\Traits;

trait syncableItems
{
    public function syncItems($items)
    {
        if (! empty($items)) {
            $ndIds = [];
            $records = [];
            $oItems = $this->items;
            foreach ($items as $item) {
                if ($item->id ?? false) {
                    $exists = $this->items()->where('id', $item->id)->first();
                    if ($exists) {
                        $exists->updated_at = now();
                        $exists->fill($item)->save();
                        $nItem = $exists;
                    } else {
                        $nItem = $this->items()->create($item);
                    }
                    $nItem->update = true;
                    $records[] = $nItem;
                    $ndIds[] = $item->id;
                } else {
                    $new = $this->items()->create($item);
                    $records[] = $new;
                    $ndIds[] = $new->id;
                }
            }

            $oItems->filter(function ($item) use ($ndIds) {
                if (! in_array($item->id, $ndIds)) {
                    return $item;
                }
            })->map(fn ($item) => $item->forceDelete());

            return $records;
        }
    }
}
