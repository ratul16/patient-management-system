<template>
  <div class="patient-overview-card custom-card shadow-sm">
    <div v-if="Object.keys(patientData).length > 0">
      <div class="header d-flex justify-content-between align-items-start">
        <div class="mb-2">
          <h4 class="mb-0">{{ patientData.name }}</h4>
          <small class="text-muted">{{ patientData.sex }}</small>
        </div>
        <b-button class="custom-btn" variant="primary"> Details </b-button>
      </div>
      <div class="info-wrapper mt-2">
        <div class="health">
          <h6>General Informations</h6>
          <b-row class="health-grid" align-v="start">
            <b-col md="6" sm="6">
              <small class="text-muted">D.O.B</small>
              <p>
                {{
                  new Date(patientData.dob).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                }}
              </p>
            </b-col>
            <b-col md="6" sm="6">
              <small class="text-muted">Weight</small>
              <p>{{ patientData.weight }}</p>
            </b-col>
            <b-col md="6" sm="6">
              <small class="text-muted">Height</small>
              <p>{{ patientData.height }}</p>
            </b-col>
            <b-col md="6" sm="6">
              <small class="text-muted">Last Appointment</small>
              <p>
                {{
                  patientData.lastAppointment
                    ? new Date(patientData.lastAppointment).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                    : "New Patient"
                }}
              </p>
            </b-col>
          </b-row>
          <hr />
          <div class="symptoms">
            <h6>Symptoms</h6>
            <div>
              <small v-for="s in patientData.symptoms" :key="s"> {{ s }} </small>
            </div>
          </div>
          <hr />
        </div>
        <div class="medicine">
          <h6>Current Medications</h6>
          <ul class="pl-0 mb-0">
            <li>
              <i class="fa-solid fa-pills mr-2" />
              <span> Acetaminophen</span>
            </li>
            <li>
              <i class="fa-solid fa-pills mr-2" />
              <span> Ibuprofen</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fallback" v-else>
      <h6 class="highlight">Select patient to view information</h6>
      <div class="fallback-wrapper">
        <div class="header d-flex justify-content-between align-items-start">
          <div class="mb-2">
            <h4 class="mb-0">Patient</h4>
            <small class="text-muted">Gender</small>
          </div>
          <b-button class="custom-btn" variant="primary"> Details </b-button>
        </div>
        <div class="info-wrapper mt-2">
          <div class="health">
            <h6>General Informations</h6>
            <b-row class="health-grid" align-v="start">
              <b-col md="6" sm="6">
                <small class="text-muted">D.O.B</small>
                <p>20th January, 1990</p>
              </b-col>
              <b-col md="6" sm="6">
                <small class="text-muted">Weight</small>
                <p>20th January, 1990</p>
              </b-col>
              <b-col md="6" sm="6">
                <small class="text-muted">Height</small>
                <p>20th January, 1990</p>
              </b-col>
              <b-col md="6" sm="6">
                <small class="text-muted">Last Appointment</small>
                <p>20th January, 1990</p>
              </b-col>
            </b-row>
            <hr />
            <div class="symptoms">
              <h6>Symptoms</h6>
              <div>
                <small> Fever </small>
                <small> Cold </small>
              </div>
            </div>
            <hr />
          </div>
          <div class="medicine">
            <h6>Current Medications</h6>
            <ul class="pl-0 mb-0">
              <li>
                <i class="fa-solid fa-pills mr-2" />
                <span> Acetaminophen</span>
              </li>
              <li>
                <i class="fa-solid fa-pills mr-2" />
                <span> Ibuprofen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MedicationCard from "../patient/MedicationCard.vue";
export default {
  name: "PatientOverviewCard",
  props: {
    patientData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    MedicationCard,
  },
};
</script>

<style lang="scss" scoped>
.patient-overview-card {
  position: relative;
  transition: $transition;
  .fallback {
    .highlight {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
    .fallback-wrapper {
      filter: blur(8px);
      pointer-events: none;
      user-select: none;
    }
  }
  .header {
    border-bottom: 1px solid $brand-color;
  }
  .info-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    h6 {
      color: $brand-color;
    }
    .health {
      p {
        margin-bottom: 0;
      }
    }
    .symptoms {
      & > div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      small {
        border-radius: 6px;
        padding: 4px 16px;
        background-color: $border-variant-5;
      }
    }
    .medicine {
      border-left: 1px solid $brand-color;
      padding-left: 16px;
      ul {
        list-style: none;

        i {
          color: $brand-color;
        }
      }
    }
  }
}

@include media-queries("tab") {
  .patient-overview-card {
    .header {
      border-bottom: 1px solid $brand-color;
    }
    .info-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      .medicine {
        border-left: none;
        padding-left: 0;
        // margin-top: 16px;
        ul {
          list-style: none;

          i {
            color: $brand-color;
          }
        }
      }
    }
  }
}
</style>