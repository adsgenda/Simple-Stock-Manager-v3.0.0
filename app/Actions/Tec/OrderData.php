<?php

namespace App\Actions\Tec;

class OrderData
{
    public function __invoke($form, $model)
    {
        $form['items'] = collect($form['items'])->transform(function ($item) {
            unset($item['old_quantity']);

            return $item;
        });

        return $form;
    }
}
