<template>
  <div class="reports">
    <b-card no-body class="shadow-sm">
      <b-table
        id="reportDetailList"
        :items="list"
        :fields="tableColumns"
        primary-key="id"
        empty-text="No matching records found"
        responsive
        show-empty
        hover
        class="position-relative"
      >
        <template #table-busy>
          <div class="text-center text-primary m-2">
            <b-spinner class="align-middle" />
            <strong> Loading...</strong>
          </div>
        </template>
        <template #cell(actions)="data">
          <div
            :id="`${data.item.id}-preview-icon`"
            class="text-nowrap cursor-pointer"
            @click="getReportData(data.item)"
          >
            <i class="fa-solid fa-eye" />
            <!-- {{data.item.id}} -->
          </div>
        </template>
        <template #cell(medications_prescribed)="data">
          <small>
            {{ data.item.medications_prescribed.join(", ") }}
          </small>
        </template>
        <template #cell(tests_conducted)="data">
          <b-badge
            variant="info"
            v-for="t in data.item.tests_conducted"
            :key="t"
            class="mr-1 text-capitalize"
          >
            {{ t }}
          </b-badge>
        </template>
        <template #cell(follow_up_required)="data">
          <small>
            {{ data.item.follow_up_required ? "Yes" : "No" }}
          </small>
        </template>
      </b-table>
    </b-card>
    <ReportSidebar :report-data="reportData" />
  </div>
</template>

<script>
import reportList from "../data/report.json";
import ReportSidebar from "../components/ReportSidebar.vue";

export default {
  name: "ReportList",
  components: {
    ReportSidebar,
  },
  data() {
    return {
      list: reportList,
      reportData: {},
      tableColumns: [
        { key: "actions", label: "" },
        { key: "report_id", label: "Report ID", thClass: "sm" },
        { key: "patient_id", label: "Patient ID", thClass: "sm" },
        { key: "doctor", label: "Doctor", thClass: "sm" },
        { key: "medications_prescribed", label: "Medication", thClass: "sm" },
        { key: "tests_conducted", label: "Tests Conducted", thClass: "sm" },
        { key: "follow_up_required", label: "Follow Up", thClass: "md" },
        {
          key: "date",
          label: "Date",
          thClass: "md",
          formatter: (value) => value || "N/A",
        },
      ],
    };
  },
  methods: {
    getReportData(data) {
      this.reportData = data;
      this.$root.$emit("bv::toggle::collapse", "report-detail-view");
    },
  },
};
</script>

<style lang="scss" scoped>
.reports {
  .card {
    border: none;
  }
}
</style>