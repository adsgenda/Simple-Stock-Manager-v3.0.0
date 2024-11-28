<?php

// Get Settings
if (! function_exists('get_settings')) {
    function get_settings($key = null)
    {
        if ($key) {
            return optional(App\Models\Setting::where('tec_key', $key)->first())->tec_value;
        }

        return App\Models\Setting::all()->pluck('tec_value', 'tec_key')->merge(['baseUrl' => url('/')]);
    }
}

// Log Activity
if (! function_exists('log_activity')) {
    function log_activity($activity, $properties = null, $model = null, $name = null)
    {
        return activity($name)->performedOn($model)->withProperties($properties)->log($activity);
    }
}

// Format Decimal
if (! function_exists('formatDecimal')) {
    function formatDecimal($number, $decimals = 4, $ds = '.', $ts = '')
    {
        return number_format($number, $decimals, $ds, $ts);
    }
}

// Format Number
if (! function_exists('formatNumber')) {
    function formatNumber($number, $decimals = 2, $ds = '.', $ts = ',')
    {
        return number_format($number, $decimals, $ds, $ts);
    }
}

// Is Demo Enabled
if (! function_exists('demo')) {
    function demo()
    {
        return env('DEMO', false);
    }
}

// Json translation with choice replace
if (! function_exists('__choice')) {
    function __choice($key, array $replace = [], $number = null)
    {
        return trans_choice($key, $number, $replace);
    }
}

// Get account id
if (! function_exists('getAccountId')) {
    function getAccountId($account_id = null)
    {
        return session('account_id', $account_id ?? optional(auth()->user())->account_id);
    }
}

// Get UUID v1
if (! function_exists('uuid1')) {
    function uuid1()
    {
        $nodeProvider = new Ramsey\Uuid\Provider\Node\RandomNodeProvider;

        return Ramsey\Uuid\Uuid::uuid1($nodeProvider->getNode());
    }
}

// Get UUID v4
if (! function_exists('uuid4')) {
    function uuid4()
    {
        return Ramsey\Uuid\Uuid::uuid4();
    }
}

// Get ULID
if (! function_exists('ulid')) {
    function ulid()
    {
        return (string) Ulid\Ulid::generate(true);
    }
}

// Get get next id
if (! function_exists('get_next_id')) {
    function get_next_id($model)
    {
        return collect(Illuminate\Support\Facades\DB::select("show table status like '{$model->getTable()}'"))->first()->Auto_increment;
    }
}

// Get reference
if (! function_exists('get_reference')) {
    function get_reference($model)
    {
        $format = get_settings('reference');

        return match ($format) {
            'ai'     => get_next_id($model),
            'ulid'   => ulid(),
            'uuid'   => uuid4(),
            'uniqid' => uniqid(),
            default  => ulid(),
        };
    }
}

// Get dot settings array
if (! function_exists('get_dot_keys')) {
    function get_dot_keys($flip = false)
    {
        $keys = [
            'mail_from_address'            => 'mail.from.address',
            'mail_from_name'               => 'mail.from.name',
            'mail_default'                 => 'mail.default',
            'mail_mailers_smtp_host'       => 'mail.mailers.smtp.host',
            'mail_mailers_smtp_port'       => 'mail.mailers.smtp.port',
            'mail_mailers_smtp_username'   => 'mail.mailers.smtp.username',
            'mail_mailers_smtp_password'   => 'mail.mailers.smtp.password',
            'mail_mailers_smtp_encryption' => 'mail.mailers.smtp.encryption',
            'services_mailgun_domain'      => 'services.mailgun.domain',
            'services_mailgun_secret'      => 'services.mailgun.secret',
            'services_mailgun_endpoint'    => 'services.mailgun.endpoint',
            'services_sparkpost_secret'    => 'services.sparkpost.secret',
            'services_sparkpost_endpoint'  => 'services.sparkpost.endpoint',
            'services_ses_key'             => 'services.ses.key',
            'services_ses_secret'          => 'services.ses.secret',
            'services_ses_region'          => 'services.ses.region',
        ];

        if ($flip) {
            return array_flip($keys);
        }

        return $keys;
    }
}
