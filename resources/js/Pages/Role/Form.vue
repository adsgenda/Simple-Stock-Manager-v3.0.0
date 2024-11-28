<script setup>
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import CheckBox from '@/Shared/CheckBox.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';

const form = useForm({ name: null, permissions: [] });

const props = defineProps(['edit', 'roles']);
if (props.edit) {
  form.name = props.edit.data.name;
  form.permissions = props.edit.data.permissions || [];
}
const { t } = useI18n({});

const updatePermissions = v => {
  if (form.permissions.includes(v)) {
    form.permissions = form.permissions.filter(r => r != v);
  } else {
    form.permissions = [...form.permissions, v];
  }
};

function submit() {
  let method = props.edit ? 'put' : 'post';
  let url = props.edit ? route('roles.update', props.edit.data.id) : route('roles.store');
  form[method](url, {
    preserveScroll: true,
    onSuccess: () => {
      props.edit ? '' : form.reset();
    },
    onError: () => {
      if (form.errors.name) {
        document.getElementById('name').focus();
      }
    },
  });
}
</script>

<template>
  <AppLayout :title="props.edit ? t('Edit Role') : t('Add New Role')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ props.edit ? t('Edit Role') : t('Add New Role') }}</template>
        <template #description>
          {{ t('Please fill the form below to {x} item.', { x: props.edit ? t('update') : t('add') }) }}
          <div>
            <Button :href="route('roles.index')" class="mt-4">{{ t('List Roles') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="col-span-full">
            <TextInput v-model="form.name" id="name" :error="form.errors.name" :label="t('Name')" />
          </div>

          <template v-if="edit">
            <div class="col-span-full">
              <div class="mt-6">
                <label class="block w-full font-bold mb-2">{{ t('Checkins') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-checkins"
                    value="read-checkins"
                    @input="updatePermissions('read-checkins')"
                    :label="t('View {x}', { x: t('Checkins') })"
                    :checked="form.permissions.includes('read-checkins')"
                  />

                  <check-box
                    id="create-checkins"
                    value="create-checkins"
                    @input="updatePermissions('create-checkins')"
                    :label="t('Create {x}', { x: t('Checkins') })"
                    :checked="form.permissions.includes('create-checkins')"
                  />

                  <check-box
                    id="update-checkins"
                    value="update-checkins"
                    @input="updatePermissions('update-checkins')"
                    :label="t('Update {x}', { x: t('Checkins') })"
                    :checked="form.permissions.includes('update-checkins')"
                  />

                  <check-box
                    id="delete-checkins"
                    value="delete-checkins"
                    @input="updatePermissions('delete-checkins')"
                    :label="t('Delete {x}', { x: t('Checkins') })"
                    :checked="form.permissions.includes('delete-checkins')"
                  />
                </div>
              </div>

              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Checkouts') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-checkouts"
                    value="read-checkouts"
                    @input="updatePermissions('read-checkouts')"
                    :label="t('View {x}', { x: t('Checkouts') })"
                    :checked="form.permissions.includes('read-checkouts')"
                  />

                  <check-box
                    id="create-checkouts"
                    value="create-checkouts"
                    @input="updatePermissions('create-checkouts')"
                    :label="t('Create {x}', { x: t('Checkouts') })"
                    :checked="form.permissions.includes('create-checkouts')"
                  />

                  <check-box
                    id="update-checkouts"
                    value="update-checkouts"
                    @input="updatePermissions('update-checkouts')"
                    :label="t('Update {x}', { x: t('Checkouts') })"
                    :checked="form.permissions.includes('update-checkouts')"
                  />

                  <check-box
                    id="delete-checkouts"
                    value="delete-checkouts"
                    @input="updatePermissions('delete-checkouts')"
                    :label="t('Delete {x}', { x: t('Checkouts') })"
                    :checked="form.permissions.includes('delete-checkouts')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Items') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-items"
                    value="read-items"
                    @input="updatePermissions('read-items')"
                    :label="t('View {x}', { x: t('Items') })"
                    :checked="form.permissions.includes('read-items')"
                  />

                  <check-box
                    id="create-items"
                    value="create-items"
                    @input="updatePermissions('create-items')"
                    :label="t('Create {x}', { x: t('Items') })"
                    :checked="form.permissions.includes('create-items')"
                  />

                  <check-box
                    id="update-items"
                    value="update-items"
                    @input="updatePermissions('update-items')"
                    :label="t('Update {x}', { x: t('Items') })"
                    :checked="form.permissions.includes('update-items')"
                  />

                  <check-box
                    id="import-items"
                    value="import-items"
                    @input="updatePermissions('import-items')"
                    :label="t('Import {x}', { x: t('Items') })"
                    :checked="form.permissions.includes('import-items')"
                  />

                  <check-box
                    id="delete-items"
                    value="delete-items"
                    @input="updatePermissions('delete-items')"
                    :label="t('Delete {x}', { x: t('Items') })"
                    :checked="form.permissions.includes('delete-items')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Customers') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-customers"
                    value="read-customers"
                    @input="updatePermissions('read-customers')"
                    :label="t('View {x}', { x: t('Customers') })"
                    :checked="form.permissions.includes('read-customers')"
                  />

                  <check-box
                    id="create-customers"
                    value="create-customers"
                    @input="updatePermissions('create-customers')"
                    :label="t('Create {x}', { x: t('Customers') })"
                    :checked="form.permissions.includes('create-customers')"
                  />

                  <check-box
                    id="update-customers"
                    value="update-customers"
                    @input="updatePermissions('update-customers')"
                    :label="t('Update {x}', { x: t('Customers') })"
                    :checked="form.permissions.includes('update-customers')"
                  />

                  <check-box
                    id="import-customers"
                    value="import-customers"
                    @input="updatePermissions('import-customers')"
                    :label="t('Import {x}', { x: t('Customers') })"
                    :checked="form.permissions.includes('import-customers')"
                  />

                  <check-box
                    id="delete-customers"
                    value="delete-customers"
                    @input="updatePermissions('delete-customers')"
                    :label="t('Delete {x}', { x: t('Customers') })"
                    :checked="form.permissions.includes('delete-customers')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Suppliers') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-suppliers"
                    value="read-suppliers"
                    @input="updatePermissions('read-suppliers')"
                    :label="t('View {x}', { x: t('Suppliers') })"
                    :checked="form.permissions.includes('read-suppliers')"
                  />

                  <check-box
                    id="create-suppliers"
                    value="create-suppliers"
                    @input="updatePermissions('create-suppliers')"
                    :label="t('Create {x}', { x: t('Suppliers') })"
                    :checked="form.permissions.includes('create-suppliers')"
                  />

                  <check-box
                    id="update-suppliers"
                    value="update-suppliers"
                    @input="updatePermissions('update-suppliers')"
                    :label="t('Update {x}', { x: t('Suppliers') })"
                    :checked="form.permissions.includes('update-suppliers')"
                  />

                  <check-box
                    id="import-suppliers"
                    value="import-suppliers"
                    @input="updatePermissions('import-suppliers')"
                    :label="t('Import {x}', { x: t('Suppliers') })"
                    :checked="form.permissions.includes('import-suppliers')"
                  />

                  <check-box
                    id="delete-suppliers"
                    value="delete-suppliers"
                    @input="updatePermissions('delete-suppliers')"
                    :label="t('Delete {x}', { x: t('Suppliers') })"
                    :checked="form.permissions.includes('delete-suppliers')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Categories') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-categories"
                    value="read-categories"
                    @input="updatePermissions('read-categories')"
                    :label="t('View {x}', { x: t('Categories') })"
                    :checked="form.permissions.includes('read-categories')"
                  />

                  <check-box
                    id="create-categories"
                    value="create-categories"
                    @input="updatePermissions('create-categories')"
                    :label="t('Create {x}', { x: t('Categories') })"
                    :checked="form.permissions.includes('create-categories')"
                  />

                  <check-box
                    id="update-categories"
                    value="update-categories"
                    @input="updatePermissions('update-categories')"
                    :label="t('Update {x}', { x: t('Categories') })"
                    :checked="form.permissions.includes('update-categories')"
                  />

                  <check-box
                    id="import-categories"
                    value="import-categories"
                    @input="updatePermissions('import-categories')"
                    :label="t('Import {x}', { x: t('Categories') })"
                    :checked="form.permissions.includes('import-categories')"
                  />

                  <check-box
                    id="delete-categories"
                    value="delete-categories"
                    @input="updatePermissions('delete-categories')"
                    :label="t('Delete {x}', { x: t('Categories') })"
                    :checked="form.permissions.includes('delete-categories')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Users') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-users"
                    value="read-users"
                    @input="updatePermissions('read-users')"
                    :label="t('View {x}', { x: t('Users') })"
                    :checked="form.permissions.includes('read-users')"
                  />

                  <check-box
                    id="create-users"
                    value="create-users"
                    @input="updatePermissions('create-users')"
                    :label="t('Create {x}', { x: t('Users') })"
                    :checked="form.permissions.includes('create-users')"
                  />

                  <check-box
                    id="update-users"
                    value="update-users"
                    @input="updatePermissions('update-users')"
                    :label="t('Update {x}', { x: t('Users') })"
                    :checked="form.permissions.includes('update-users')"
                  />

                  <check-box
                    id="delete-users"
                    value="delete-users"
                    @input="updatePermissions('delete-users')"
                    :label="t('Delete {x}', { x: t('Users') })"
                    :checked="form.permissions.includes('delete-users')"
                  />
                </div>
              </div>
              <div class="my-6">
                <label class="block w-full font-bold mb-2">{{ t('Roles') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-roles"
                    value="read-roles"
                    @input="updatePermissions('read-roles')"
                    :label="t('View {x}', { x: t('Roles') })"
                    :checked="form.permissions.includes('read-roles')"
                  />

                  <check-box
                    id="create-roles"
                    value="create-roles"
                    @input="updatePermissions('create-roles')"
                    :label="t('Create {x}', { x: t('Roles') })"
                    :checked="form.permissions.includes('create-roles')"
                  />

                  <check-box
                    id="update-roles"
                    value="update-roles"
                    @input="updatePermissions('update-roles')"
                    :label="t('Update {x}', { x: t('Roles') })"
                    :checked="form.permissions.includes('update-roles')"
                  />

                  <check-box
                    id="delete-roles"
                    value="delete-roles"
                    @input="updatePermissions('delete-roles')"
                    :label="t('Delete {x}', { x: t('Roles') })"
                    :checked="form.permissions.includes('delete-roles')"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label class="block w-full font-bold mb-2">{{ t('Attachments') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="delete-attachments"
                    value="delete-attachments"
                    @input="updatePermissions('delete-attachments')"
                    :label="t('Delete {x}', { x: t('Attachments') })"
                    :checked="form.permissions.includes('delete-attachments')"
                  />
                </div>
              </div>
              <div class="mt-6">
                <label class="block w-full font-bold mb-2">{{ t('Activity Logs') }}</label>
                <div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6">
                  <check-box
                    id="read-activity"
                    value="read-activity"
                    @input="updatePermissions('read-activity')"
                    :label="t('View {x}', { x: t('Activity Logs') })"
                    :checked="form.permissions.includes('read-activity')"
                  />
                </div>
              </div>
            </div>
          </template>
        </template>

        <template #actions>
          <ActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </ActionMessage>
          <Button type="submit" :loading="form.processing"> Save </Button>
        </template>
      </FormSection>
    </div>
  </AppLayout>
</template>
