<script setup>
const toast = useToast()

const reports = ref([
  {
    id: 'MTR001',
    date: '2024-01-18',
    doctor: 'Dr. Smith',
    test_report: {
      name: 'Blood Test',
      result: 'Normal',
    },
    file: true,
  },
  {
    id: 'MTR002',
    date: '2024-01-19',
    doctor: 'Dr. Johnson',
    test_report: {
      name: 'MRI',
      result: 'No signs of neurological issues',
    },
    file: true,
  },
  {
    id: 'MTR003',
    date: '2024-01-20',
    doctor: 'Dr. Davis',
    test_report: {
      name: 'EKG',
      result: 'Normal heart rhythm',
    },
    file: false,
  },
  {
    id: 'MTR004',
    date: '2024-01-21',
    doctor: 'Dr. Wilson',
    test_report: {
      name: 'Blood Pressure',
      result: '122/78 mmHg',
    },
    file: true,
  },
  {
    id: 'MTR005',
    date: '2024-01-22',
    doctor: 'Dr. Martinez',
    test_report: {
      name: 'Vision Test',
      result: '20/20',
    },
    file: false,
  },
  {
    id: 'MTR006',
    date: '2024-01-23',
    doctor: 'Dr. White',
    test_report: {
      name: 'X-Ray',
      result: 'No abnormalities detected',
    },
    file: false,
  },
  {
    id: 'MTR007',
    date: '2024-01-24',
    doctor: 'Dr. Harris',
    test_report: {
      name: 'Cholesterol',
      result: '180 mg/dL',
    },
    file: false,
  },
  {
    id: 'MTR008',
    date: '2024-01-25',
    doctor: 'Dr. Adams',
    test_report: {
      name: 'Allergy Test',
      result: 'Positive for pollen allergies',
    },
    file: true,
  },
  {
    id: 'MTR009',
    date: '2024-01-26',
    doctor: 'Dr. Taylor',
    test_report: {
      name: 'Ultrasound',
      result: 'Normal',
    },
    file: false,
  },
  {
    id: 'MTR010',
    date: '2024-01-27',
    doctor: 'Dr. Brown',
    test_report: {
      name: 'Spirometry',
      result: 'Normal lung function',
    },
    file: true,
  },
])

const columns = [
  {
    accessorKey: 'test_report', // Still points to the object for slot
    header: 'Test Report',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    },
    sortable: true,
  },
  {
    accessorKey: 'doctor',
    header: 'Doctor',
  },

  {
    id: 'actions',
    header: 'Actions',
  },
]

function getDropdownActions(data, action) {
  if (action === 'view') {
    toast.add({
      title: 'Viewing report',
      description: `Viewing report: ${data.test_report.name}`,
      icon: 'fa6-solid:arrows-to-eye',
    })
  } else {
    // Handle download action
    toast.add({
      title: 'Report Download',
      description: `${data.test_report.name} has been downloaded.`,
      icon: 'fa6-solid:file-arrow-down',
    })
  }
}
</script>

<template>
  <div
    class="w-full element-bg rounded-lg shadow-sm overflow-hidden flex flex-col justify-between p-4"
  >
    <h4 class="text-lg font-semibold element-header">Recent Reports</h4>
    <UTable sticky :columns="columns" :data="reports" class="flex-1 max-h-[340px]">
      <template #test_report-cell="{ row }">
        <div class="flex items-start">
          <UIcon
            name="fa6-solid:file-contract"
            class="text-xl flex-shrink-0 mt-0.5 mr-2 text-brand-primary-500 dark:text-brand-primary-400"
          />
          <div class="flex flex-col">
            <span class="font-medium text-brand-primary dark:text-gray-100">
              {{ row.original.test_report.name }}
            </span>
            <small class="text-xs">
              {{ row.original.test_report.result }}
            </small>
          </div>
        </div>
      </template>
      <template #actions-cell="{ row }">
        <div class="flex items-center justify-start gap-1">
          <UButton
            icon="fa6-solid:eye"
            variant="outline"
            color="primary"
            class="cursor-pointer"
            size="sm"
            :ui="{ rounded: 'rounded-full' }"
            aria-label="View Report"
            @click="getDropdownActions(row.original, 'view')"
          />

          <UButton
            v-if="row.original.file"
            icon="fa6-solid:file-arrow-down"
            variant="outline"
            class="cursor-pointer"
            color="primary"
            size="sm"
            aria-label="Download File"
            :ui="{ rounded: 'rounded-full' }"
            @click="getDropdownActions(row.original, 'download')"
          />
        </div>
      </template>
      <!-- <template #action-cell="{ row }">
        <UDropdownMenu :items="getDropdownActions(row.original)">
          <UButton
            icon="i-lucide-ellipsis-vertical"
            color="neutral"
            variant="ghost"
            aria-label="Actions"
          />
        </UDropdownMenu>
      </template> -->
    </UTable>
  </div>
</template>

<style lang="scss" scoped></style>
