<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Setting;
use App\Rules\LocaleLength;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SettingController extends Controller
{
    public function index()
    {
        return Inertia::render('Setting/Index', ['current' => get_settings()]);
    }

    public function store(Request $request)
    {
        $langFiles = collect(json_decode(File::get(lang_path('languages.json')))->available)->pluck('value')->all();

        $settings = $request->validate([
            'name'                         => 'required',
            'over_selling'                 => 'nullable|boolean',
            'language'                     => 'required|string|in:' . implode(',', $langFiles),
            'per_page'                     => 'required|in:10,15,25,50,100',
            'hour12'                       => 'nullable|boolean',
            'default_locale'               => ['required', new LocaleLength],
            'reference'                    => 'required|string|in:ai,ulid,uuid,uniqid',
            'customer_cf1'                 => 'nullable|string',
            'customer_cf2'                 => 'nullable|string',
            'supplier_cf1'                 => 'nullable|string',
            'supplier_cf2'                 => 'nullable|string',
            'logo'                         => 'nullable|mimes:png,jpg,jpeg,svg',
            'mail_from_address'            => 'nullable|email',
            'mail_from_name'               => 'nullable|string',
            'mail_default'                 => 'nullable|in:smtp,mailgun,sparkpost,ses',
            'mail_mailers_smtp_host'       => 'nullable|string',
            'mail_mailers_smtp_port'       => 'nullable|numeric',
            'mail_mailers_smtp_username'   => 'nullable|string',
            'mail_mailers_smtp_password'   => 'nullable|string',
            'mail_mailers_smtp_encryption' => 'nullable|in:tls,ssl',
            'services_mailgun_domain'      => 'nullable|string',
            'services_mailgun_secret'      => 'nullable|string',
            'services_mailgun_endpoint'    => 'nullable|string',
            'services_sparkpost_secret'    => 'nullable|string',
            'services_sparkpost_endpoint'  => 'nullable|string',
            'services_ses_key'             => 'nullable|string',
            'services_ses_secret'          => 'nullable|string',
            'services_ses_region'          => 'nullable|string',
        ]);

        if (demo()) {
            $settings['name'] = 'SSM';
            $settings['logo'] = '/storage/logo.svg';
        } else {
            if ($request->has('logo') && $request->logo) {
                $settings['logo'] = $request->logo->store('/images', 'public');
                // $settings['logo'] = Storage::disk('public')->url($settings['logo']);
            }
        }

        collect($settings)->each(function ($value, $key) {
            Setting::updateOrCreate(['tec_key' => $key, 'account_id' => auth()->user()->account_id], ['tec_value' => $value]);
        });
        log_activity(__choice('{record} has been {action}.', ['record' => 'Settings', 'action' => 'saved']), $settings, auth()->user(), 'Setting');

        return back()->with('message', __choice('{record} has been {action}.', ['record' => 'Settings', 'action' => 'saved']));
    }
}
