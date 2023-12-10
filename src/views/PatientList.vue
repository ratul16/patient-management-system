<template>
  <div class="patients">
    <b-card no-body class="shadow-sm">
      <b-table
        id="patientDetailList"
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
            @click="getPatientData(data.item)"
          >
            <i class="fa-solid fa-eye" />
            <!-- {{data.item.id}} -->
          </div>
        </template>
      </b-table>
    </b-card>
    <PatientSidebar :patient-data="patientData" />
  </div>
</template>

<script>
import patientList from "../data/patient.json";
import PatientSidebar from "../components/PatientSidebar.vue";

export default {
  name: "PatientList",
  components: {
    PatientSidebar,
  },
  data() {
    return {
      list: patientList,
      patientData: {},
      tableColumns: [
        { key: "actions", label: "" },
        { key: "id", label: "Patient ID", thClass: "md" },
        {
          key: "name",
          label: "Full Name",
          thClass: "md",
        },
        {
          key: "age",
          label: "Age",
          thClass: "sm",
        },
        { key: "gender", label: "Gender", thClass: "md" },
        { key: "diagnosis", label: "Diagnosis", thClass: "md" },
        { key: "doctor", label: "Doctor", thClass: "md" },
        {
          key: "appointment",
          label: "Appointment",
          thClass: "md",
          formatter: (value) => value || "N/A",
        },
      ],
    };
  },
  methods: {
    getPatientData(data) {
      this.patientData = data;
      this.$root.$emit("bv::toggle::collapse", "patient-detail-view");
    },
  },
};
</script>

<style lang="scss" scoped>
.patients {
  .card {
    border: none;
  }
}
</style>