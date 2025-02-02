<?php

namespace App\Helpers;

use Illuminate\Support\Str;
use Illuminate\Contracts\Translation\Loader;
use Illuminate\Translation\Translator as BaseTranslator;

class Translator extends BaseTranslator
{
    // public function __construct(Loader $loader, $locale)
    // {
    //     parent::__construct($loader, $locale);
    // }

    protected function makeReplacements($line, array $replace)
    {
        if (empty($replace)) {
            return $line;
        }

        $shouldReplace = [];

        foreach ($replace as $key => $value) {
            $shouldReplace[':' . Str::ucfirst($key ?? '')] = Str::ucfirst($value ?? '');
            $shouldReplace[':' . Str::upper($key ?? '')] = Str::upper($value ?? '');
            $shouldReplace[':' . $key] = $value;

            $shouldReplace['{' . Str::ucfirst($key ?? '') . '}'] = Str::ucfirst($value ?? '');
            $shouldReplace['{' . Str::upper($key ?? '') . '}'] = Str::upper($value ?? '');
            $shouldReplace['{' . $key . '}'] = $value;
        }

        return strtr($line, $shouldReplace);
    }
}
