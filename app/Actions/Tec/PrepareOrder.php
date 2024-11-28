<?php

namespace App\Actions\Tec;

use Illuminate\Support\Facades\DB;

class PrepareOrder
{
    public function __construct(protected $form, protected $model, protected $updating = false) {}

    public function save()
    {
        DB::transaction(function () {
            $this->model->fill($this->form)->save();
            $this->model->syncItems($this->form['items']);
            $this->model->refresh();
        }, 2);

        return $this->model;
    }
}
