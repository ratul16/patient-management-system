<template>
  <div class="appointment-card custom-card shadow-sm">
    <div class="body">
      <h6>Today Appointments</h6>
      <div class="event">
        <ul class="pl-0 mb-0">
          <li
            v-for="a in appointments"
            :key="a.id"
            class="cursor-pointer"
            :class="selected === a.id ? 'active' : ''"
            @click="getPatientData(a)"
          >
            <div class="details">
              <span class="name">{{ a.person.name }}</span>
              <small class="text-muted">{{ a.reason }}</small>
            </div>
            <span class="time">{{ a.time === null ? "On Going" : formattedTime(a.time) }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer" @click="$router.push({ name: 'appointments' })">See all appointments</div>
  </div>
</template>

<script>
export default {
  name: "appointmentCard",
  data() {
    return {
      selected: "",
      appointments: [
        {
          id: "AP001",
          person: {
            name: "John Doe",
            sex: "Male",
            dob: "1989-05-15",
            age: 35,
            height: "180 cm",
            weight: "75 kg",
            lastAppointment: null,
            symptoms: ["Fever", "Headache"],
          },
          reason: "General Checkup",
          time: null,
        },
        {
          id: "AP002",
          person: {
            name: "Jane Smith",
            sex: "Female",
            dob: "1994-08-22",
            age: 28,
            height: "165 cm",
            weight: "60 kg",
            lastAppointment: "2023-11-20",
            symptoms: ["Cough", "Fatigue"],
          },
          reason: "Respiratory Issues",
          time: "2024-01-21T10:00:00",
        },
        {
          id: "AP003",
          person: {
            name: "Robert Johnson",
            sex: "Male",
            dob: "1979-03-10",
            age: 45,
            height: "175 cm",
            weight: "80 kg",
            lastAppointment: "2023-12-10",
            symptoms: ["Back Pain", "Stress"],
          },
          reason: "Orthopedic Consultation",
          time: "2024-01-22T10:30:00",
        },
        {
          id: "AP004",
          person: {
            name: "Emily Wilson",
            sex: "Female",
            dob: "1989-11-05",
            age: 32,
            height: "160 cm",
            weight: "55 kg",
            lastAppointment: null,
            symptoms: ["Migraine", "Insomnia"],
          },
          reason: "Neurology Consultation",
          time: "2024-01-23T11:00:00",
        },
        {
          id: "AP005",
          person: {
            name: "Michael Davis",
            sex: "Male",
            dob: "1983-06-20",
            age: 40,
            height: "185 cm",
            weight: "90 kg",
            lastAppointment: "2023-11-25",
            symptoms: ["High Blood Pressure", "Anxiety"],
          },
          reason: "Cardiology Checkup",
          time: "2024-01-24T11:30:00",
        },
        // Add more appointments as needed
      ],
    };
  },
  methods: {
    getPatientData(data) {
      this.selected = data.id;
      this.$emit("getPatientData", data);
    },
    formattedTime(data) {
      const dateObject = new Date(data);
      const formatted = dateObject.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return formatted;
    },
  },
};
</script>

<style lang="scss" scoped>
.appointment-card {
  .footer {
    margin-top: 10px;
    border: 1px solid $border-variant-5;
    border-radius: 10px;
  }
  ul {
    height: 280px;
    overflow-y: scroll;
    list-style-type: none;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      border: 1px solid $border-variant-5;
      padding: 10px;
      transition: $transition;
      margin: 0 5px 5px 0;
      &:hover {
        border-color: $brand-color-light;
      }
      &.active {
        border-color: $brand-color;
        background-color: $text-variant-1;
      }
    }
    .name {
      font-size: 16px;
      font-weight: 500;
      color: $brand-color;
      margin-bottom: -5px;
      display: block;
    }

    .time {
      font-weight: 500;
      color: $brand-color;
      font-size: 20px;
    }
  }
}
</style>