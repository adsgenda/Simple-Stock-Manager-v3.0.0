<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted'        => ':attribute kabul edilmelidir.',
    'accepted_if'     => ':attribute, :other :value olduğunda kabul edilmelidir.',
    'active_url'      => ':attribute geçerli bir URL değil.',
    'after'           => ':attribute, :date tarihinden sonra bir tarih olmalıdır.',
    'after_or_equal'  => ':attribute, :date tarihinden sonra veya aynı tarihte olmalıdır.',
    'alpha'           => ':attribute sadece harf içerebilir.',
    'alpha_dash'      => ':attribute sadece harfler, sayılar, tireler ve alt çizgiler içerebilir.',
    'alpha_num'       => ':attribute sadece harfler ve sayılar içerebilir.',
    'array'           => ':attribute bir dizi olmalıdır.',
    'before'          => ':attribute, :date tarihinden önce bir tarih olmalıdır.',
    'before_or_equal' => ':attribute, :date tarihinden önce veya aynı tarihte olmalıdır.',
    'between'         => [
        'array'   => ':attribute, :min ile :max arasında öğe içermelidir.',
        'file'    => ':attribute, :min ile :max kilobayt arasında olmalıdır.',
        'numeric' => ':attribute, :min ile :max arasında olmalıdır.',
        'string'  => ':attribute, :min ile :max karakter arasında olmalıdır.',
    ],
    'boolean'           => ':attribute alanı true veya false olmalıdır.',
    'confirmed'         => ':attribute doğrulama eşleşmiyor.',
    'current_password'  => 'Şifre yanlış.',
    'date'              => ':attribute geçerli bir tarih değil.',
    'date_equals'       => ':attribute, :date tarihine eşit olmalıdır.',
    'date_format'       => ':attribute, :format formatına uymuyor.',
    'declined'          => ':attribute reddedilmelidir.',
    'declined_if'       => ':attribute, :other :value olduğunda reddedilmelidir.',
    'different'         => ':attribute ve :other farklı olmalıdır.',
    'digits'            => ':attribute :digits basamaklı olmalıdır.',
    'digits_between'    => ':attribute, :min ile :max arasında basamak içermelidir.',
    'dimensions'        => ':attribute geçersiz resim boyutlarına sahip.',
    'distinct'          => ':attribute alanı yinelenen bir değere sahiptir.',
    'doesnt_start_with' => ':attribute, aşağıdakilerden biriyle başlayamaz: :values.',
    'email'             => ':attribute geçerli bir e-posta adresi olmalıdır.',
    'ends_with'         => ':attribute, aşağıdakilerden biriyle bitmelidir: :values.',
    'enum'              => 'Seçilen :attribute geçersiz.',
    'exists'            => 'Seçilen :attribute geçersiz.',
    'file'              => ':attribute bir dosya olmalıdır.',
    'filled'            => ':attribute alanı bir değere sahip olmalıdır.',

    'gt' => [
        'array'   => ':attribute, :value\'den fazla öğe içermelidir.',
        'file'    => ':attribute, :value kilobayttan daha büyük olmalıdır.',
        'numeric' => ':attribute, :value\'den daha büyük olmalıdır.',
        'string'  => ':attribute, :value karakterden daha uzun olmalıdır.',
    ],
    'gte' => [
        'array'   => ':attribute, :value öğeden fazla olmalıdır.',
        'file'    => ':attribute, en az :value kilobayt olmalıdır.',
        'numeric' => ':attribute, en az :value olmalıdır.',
        'string'  => ':attribute, en az :value karakter olmalıdır.',
    ],
    'image'    => ':attribute bir resim olmalıdır.',
    'in'       => 'Seçilen :attribute geçersiz.',
    'in_array' => ':attribute alanı, :other içinde mevcut değil.',
    'integer'  => ':attribute bir tamsayı olmalıdır.',
    'ip'       => ':attribute geçerli bir IP adresi olmalıdır.',
    'ipv4'     => ':attribute geçerli bir IPv4 adresi olmalıdır.',
    'ipv6'     => ':attribute geçerli bir IPv6 adresi olmalıdır.',
    'json'     => ':attribute geçerli bir JSON dizesi olmalıdır.',
    'lt'       => [
        'array'   => ':attribute, :value\'den az öğe içermelidir.',
        'file'    => ':attribute, :value kilobayttan daha az olmalıdır.',
        'numeric' => ':attribute, :value\'den daha az olmalıdır.',
        'string'  => ':attribute, :value karakterden daha kısa olmalıdır.',
    ],
    'lte' => [
        'array'   => ':attribute, :value\'den fazla öğe içermemelidir.',
        'file'    => ':attribute, en fazla :value kilobayt olmalıdır.',
        'numeric' => ':attribute, en fazla :value olmalıdır.',
        'string'  => ':attribute, en fazla :value karakter olmalıdır.',
    ],
    'mac_address' => ':attribute geçerli bir MAC adresi olmalıdır.',
    'max'         => [
        'array'   => ':attribute, :max öğeden fazla olmamalıdır.',
        'file'    => ':attribute, en fazla :max kilobayt olmamalıdır.',
        'numeric' => ':attribute, en fazla :max olmamalıdır.',
        'string'  => ':attribute, en fazla :max karakter olmamalıdır.',
    ],
    'mimes'     => ':attribute, şu dosya türlerinden biri olmalıdır: :values.',
    'mimetypes' => ':attribute, şu dosya türlerinden biri olmalıdır: :values.',
    'min'       => [
        'array'   => ':attribute en az :min öğe içermelidir.',
        'file'    => ':attribute en az :min kilobayt olmalıdır.',
        'numeric' => ':attribute en az :min olmalıdır.',
        'string'  => ':attribute en az :min karakter olmalıdır.',
    ],
    'multiple_of' => ':attribute, :value\'nin katı olmalıdır.',
    'not_in'      => 'Seçilen :attribute geçersiz.',
    'not_regex'   => ':attribute formatı geçersiz.',
    'numeric'     => ':attribute bir sayı olmalıdır.',
    'password'    => [
        'letters'       => ':attribute en az bir harf içermelidir.',
        'mixed'         => ':attribute en az bir büyük harf ve bir küçük harf içermelidir.',
        'numbers'       => ':attribute en az bir sayı içermelidir.',
        'symbols'       => ':attribute en az bir sembol içermelidir.',
        'uncompromised' => 'Verilen :attribute veri sızıntısında göründü. Lütfen farklı bir :attribute seçin.',
    ],
    'present'              => ':attribute alanı mevcut olmalıdır.',
    'prohibited'           => ':attribute alanı yasaktır.',
    'prohibited_if'        => ':other :value olduğunda, :attribute alanı yasaktır.',
    'prohibited_unless'    => ':values içinde değilse, :attribute alanı yasaktır.',
    'prohibits'            => ':attribute alanı, :other\'ın mevcut olmasını engeller.',
    'regex'                => ':attribute formatı geçersiz.',
    'required'             => ':attribute alanı gereklidir.',
    'required_array_keys'  => ':attribute alanı şunlar için girdi içermelidir: :values.',
    'required_if'          => ':other :value olduğunda, :attribute alanı gereklidir.',
    'required_unless'      => ':other :values içinde değilse, :attribute alanı gereklidir.',
    'required_with'        => ':values mevcut olduğunda, :attribute alanı gereklidir.',
    'required_with_all'    => ':values mevcut olduğunda, :attribute alanı gereklidir.',
    'required_without'     => ':values mevcut olmadığında, :attribute alanı gereklidir.',
    'required_without_all' => ':values hiçbiri mevcut olmadığında, :attribute alanı gereklidir.',
    'same'                 => ':attribute ve :other eşleşmelidir.',
    'size'                 => [
        'array'   => ':attribute, :size öğe içermelidir.',
        'file'    => ':attribute, :size kilobayt olmalıdır.',
        'numeric' => ':attribute, :size olmalıdır.',
        'string'  => ':attribute, :size karakter olmalıdır.',
    ],
    'starts_with' => ':attribute, şunlardan biriyle başlamalıdır: :values.',
    'string'      => ':attribute bir metin olmalıdır.',
    'timezone'    => ':attribute geçerli bir saat dilimi olmalıdır.',
    'unique'      => ':attribute zaten alınmış.',
    'uploaded'    => ':attribute yüklenemedi.',
    'url'         => ':attribute geçerli bir URL olmalıdır.',
    'uuid'        => ':attribute geçerli bir UUID olmalıdır.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],
];
