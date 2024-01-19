<template>
  <div class="report-card custom-card shadow-sm">
    <h6>Recent Reports</h6>
    <b-table sticky-header responsive :items="reports" :fields="fields">
      <template #cell(test_report)="data">
        <div class="test-wrapper">
          <i class="fa-regular fa-folder"></i>
          <div class="content">
            <p>{{ data.item.test_report.name }} ({{ data.item.id }})</p>
            <small class="text-muted">
              {{ data.item.test_report.result }}
            </small>
          </div>
        </div>
      </template>
      <template #cell(date)="data">
        {{ formattedDate(data.item.date) }}
      </template>
      <template #cell(action)="data">
        <!-- {{ data.item.file }} -->
        <div class="action">
          <i class="fa-regular fa-eye"></i>
          <i class="fa-solid fa-file-arrow-down" v-if="data.item.file"></i>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "ReportCard",
  data() {
    return {
      fields: ["test_report", "doctor", "date", { key: "action", label: "Action" }],
      reports: [
        {
          id: "MTR001",
          date: "2024-01-18",
          doctor: "Dr. Smith",
          test_report: {
            name: "Blood Test",
            result: "Normal",
          },
          file: true,
        },
        {
          id: "MTR002",
          date: "2024-01-19",
          doctor: "Dr. Johnson",
          test_report: {
            name: "MRI",
            result: "No signs of neurological issues",
          },
          file: true,
        },
        {
          id: "MTR003",
          date: "2024-01-20",
          doctor: "Dr. Davis",
          test_report: {
            name: "EKG",
            result: "Normal heart rhythm",
          },
          file: false,
        },
        {
          id: "MTR004",
          date: "2024-01-21",
          doctor: "Dr. Wilson",
          test_report: {
            name: "Blood Pressure",
            result: "122/78 mmHg",
          },
          file: true,
        },
        {
          id: "MTR005",
          date: "2024-01-22",
          doctor: "Dr. Martinez",
          test_report: {
            name: "Vision Test",
            result: "20/20",
          },
          file: false,
        },
        {
          id: "MTR006",
          date: "2024-01-23",
          doctor: "Dr. White",
          test_report: {
            name: "X-Ray",
            result: "No abnormalities detected",
          },
          file: false,
        },
        {
          id: "MTR007",
          date: "2024-01-24",
          doctor: "Dr. Harris",
          test_report: {
            name: "Cholesterol",
            result: "180 mg/dL",
          },
          file: false,
        },
        {
          id: "MTR008",
          date: "2024-01-25",
          doctor: "Dr. Adams",
          test_report: {
            name: "Allergy Test",
            result: "Positive for pollen allergies",
          },
          file: true,
        },
        {
          id: "MTR009",
          date: "2024-01-26",
          doctor: "Dr. Taylor",
          test_report: {
            name: "Ultrasound",
            result: "Normal",
          },
          file: false,
        },
        {
          id: "MTR010",
          date: "2024-01-27",
          doctor: "Dr. Brown",
          test_report: {
            name: "Spirometry",
            result: "Normal lung function",
          },
          file: true,
        },
      ],
    };
  },
  methods: {
    formattedDate(date) {
      const dateObject = new Date(date);
      const day = dateObject.getDate();
      const month = dateObject.toLocaleString("en-GB", { month: "short" });
      const year = dateObject.getFullYear().toString();

      return `${day} ${month}, ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.report-card {
  .test-wrapper {
    display: flex;
    align-content: start;
    // justify-content: space-between;
    gap: 10px;
    i {
      font-size: 24px;
      color: $brand-color;
    }
    p {
      margin-bottom: -6px;
    }
  }
  .action {
    display: flex;
    gap: 10px;
    i {
      display: grid;
      place-content: center;
      width: 34px;
      height: 34px;
      color: $brand-color;
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid $brand-color;
      transition: $transition;
      &:hover {
        background-color: $brand-color;
        color: $white;
        border-color: 1px solid transparent;
      }
    }
  }
}
</style>