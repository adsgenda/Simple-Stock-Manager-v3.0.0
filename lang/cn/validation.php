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

    'accepted'        => ':attribute 必须被接受。',
    'accepted_if'     => '当 :other 为 :value 时，:attribute 必须被接受。',
    'active_url'      => ':attribute 不是一个有效的URL。',
    'after'           => ':attribute 必须是 :date 之后的日期。',
    'after_or_equal'  => ':attribute 必须是等于或晚于 :date 的日期。',
    'alpha'           => ':attribute 只能包含字母。',
    'alpha_dash'      => ':attribute 只能包含字母、数字、短横线和下划线。',
    'alpha_num'       => ':attribute 只能包含字母和数字。',
    'array'           => ':attribute 必须是一个数组。',
    'before'          => ':attribute 必须是 :date 之前的日期。',
    'before_or_equal' => ':attribute 必须是等于或早于 :date 的日期。',
    'between'         => [
        'array'   => ':attribute 必须包含 :min 到 :max 个元素。',
        'file'    => ':attribute 必须介于 :min 到 :max 千字节。',
        'numeric' => ':attribute 必须介于 :min 到 :max 之间。',
        'string'  => ':attribute 必须介于 :min 到 :max 个字符之间。',
    ],
    'boolean'           => ':attribute 字段必须为 true 或 false。',
    'confirmed'         => ':attribute 确认不匹配。',
    'current_password'  => '密码不正确。',
    'date'              => ':attribute 不是一个有效的日期。',
    'date_equals'       => ':attribute 必须是等于 :date 的日期。',
    'date_format'       => ':attribute 与指定的格式 :format 不匹配。',
    'declined'          => ':attribute 必须被拒绝。',
    'declined_if'       => '当 :other 为 :value 时，:attribute 必须被拒绝。',
    'different'         => ':attribute 和 :other 必须不同。',
    'digits'            => ':attribute 必须是 :digits 位数字。',
    'digits_between'    => ':attribute 必须介于 :min 和 :max 位数字之间。',
    'dimensions'        => ':attribute 具有无效的图像尺寸。',
    'distinct'          => ':attribute 字段具有重复的值。',
    'doesnt_start_with' => ':attribute 不能以以下任何值开头：:values。',
    'email'             => ':attribute 必须是一个有效的电子邮件地址。',
    'ends_with'         => ':attribute 必须以以下任一项结束：:values。',
    'enum'              => '所选的 :attribute 无效。',
    'exists'            => '所选的 :attribute 无效。',
    'file'              => ':attribute 必须是一个文件。',
    'filled'            => ':attribute 字段必须有值。',
    'gt'                => [
        'array'   => ':attribute 必须具有 :value 个以上的元素。',
        'file'    => ':attribute 必须大于 :value 千字节。',
        'numeric' => ':attribute 必须大于 :value。',
        'string'  => ':attribute 必须大于 :value 个字符。',
    ],
    'gte' => [
        'array'   => ':attribute 必须具有 :value 个或更多元素。',
        'file'    => ':attribute 必须大于或等于 :value 千字节。',
        'numeric' => ':attribute 必须大于或等于 :value。',
        'string'  => ':attribute 必须大于或等于 :value 个字符。',
    ],
    'image'    => ':attribute 必须是一张图片。',
    'in'       => '所选的 :attribute 无效。',
    'in_array' => ':attribute 字段在 :other 中不存在。',
    'integer'  => ':attribute 必须是一个整数。',
    'ip'       => ':attribute 必须是一个有效的IP地址。',
    'ipv4'     => ':attribute 必须是一个有效的IPv4地址。',
    'ipv6'     => ':attribute 必须是一个有效的IPv6地址。',
    'json'     => ':attribute 必须是一个有效的JSON字符串。',
    'lt'       => [
        'array'   => ':attribute 必须具有少于 :value 个元素。',
        'file'    => ':attribute 必须小于 :value 千字节。',
        'numeric' => ':attribute 必须小于 :value。',
        'string'  => ':attribute 必须小于 :value 个字符。',
    ],
    'lte' => [
        'array'   => ':attribute 不得具有 :value 个以上的元素。',
        'file'    => ':attribute 必须小于或等于 :value 千字节。',
        'numeric' => ':attribute 必须小于或等于 :value。',
        'string'  => ':attribute 必须小于或等于 :value 个字符。',
    ],
    'mac_address' => ':attribute 必须是一个有效的MAC地址。',
    'max'         => [
        'array'   => ':attribute 不得具有 :max 个以上的元素。',
        'file'    => ':attribute 不得大于 :max 千字节。',
        'numeric' => ':attribute 不得大于 :max。',
        'string'  => ':attribute 不得大于 :max 个字符。',
    ],
    'mimes'     => ':attribute 必须是以下类型之一：:values。',
    'mimetypes' => ':attribute 必须是以下类型之一：:values。',
    'min'       => [
        'array'   => ':attribute 必须至少有 :min 个元素。',
        'file'    => ':attribute 必须至少为 :min 千字节。',
        'numeric' => ':attribute 必须至少为 :min。',
        'string'  => ':attribute 必须至少为 :min 个字符。',
    ],
    'multiple_of' => ':attribute 必须是 :value 的倍数。',
    'not_in'      => '所选的 :attribute 无效。',
    'not_regex'   => ':attribute 格式无效。',
    'numeric'     => ':attribute 必须是一个数字。',
    'password'    => [
        'letters'       => ':attribute 必须包含至少一个字母。',
        'mixed'         => ':attribute 必须包含至少一个大写字母和一个小写字母。',
        'numbers'       => ':attribute 必须包含至少一个数字。',
        'symbols'       => ':attribute 必须包含至少一个符号。',
        'uncompromised' => '给定的 :attribute 已在数据泄露中出现。请选择其他 :attribute。',
    ],
    'present'              => ':attribute 字段必须存在。',
    'prohibited'           => ':attribute 字段是禁止的。',
    'prohibited_if'        => '当 :other 为 :value 时，:attribute 字段是禁止的。',
    'prohibited_unless'    => '除非 :other 在 :values 中，否则 :attribute 字段是禁止的。',
    'prohibits'            => ':attribute 字段禁止 :other 存在。',
    'regex'                => ':attribute 格式无效。',
    'required'             => ':attribute 字段是必需的。',
    'required_array_keys'  => ':attribute 字段必须包含以下条目：:values。',
    'required_if'          => '当 :other 为 :value 时，:attribute 字段是必需的。',
    'required_unless'      => '除非 :other 在 :values 中，否则 :attribute 字段是必需的。',
    'required_with'        => '当 :values 存在时，:attribute 字段是必需的。',
    'required_with_all'    => '当 :values 都存在时，:attribute 字段是必需的。',
    'required_without'     => '当 :values 不存在时，:attribute 字段是必需的。',
    'required_without_all' => '当 :values 都不存在时，:attribute 字段是必需的。',
    'same'                 => ':attribute 和 :other 必须匹配。',
    'size'                 => [
        'array'   => ':attribute 必须包含 :size 个元素。',
        'file'    => ':attribute 必须为 :size 千字节。',
        'numeric' => ':attribute 必须为 :size。',
        'string'  => ':attribute 必须为 :size 个字符。',
    ],
    'starts_with' => ':attribute 必须以以下任一项开头：:values。',
    'string'      => ':attribute 必须是一个字符串。',
    'timezone'    => ':attribute 必须是一个有效的时区。',
    'unique'      => ':attribute 已经被使用。',
    'uploaded'    => ':attribute 上传失败。',
    'url'         => ':attribute 必须是一个有效的URL。',
    'uuid'        => ':attribute 必须是一个有效的UUID。',

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
