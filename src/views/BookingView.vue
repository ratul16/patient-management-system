<template>
  <div class="card booking-view shadow-sm">
    <div class="card-body table-responsive">
      <b-table borderless fixed hover :items="projects" :fields="fields">
        <template #cell(progression)="data">
          <!-- <span>{{ data.item.progression }}</span> -->
          <b-progress :value="data.item.progression" :max="100" show-progress></b-progress>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingView",
  data() {
    return {
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Project Name" },
        { key: "description", label: "Description" },
        { key: "author", label: "Author" },
        { key: "progression", label: "Progression (%)" },
        { key: "status", label: "Status" },
      ],
      projects: [
        {
          id: 1,
          name: "E-commerce Website",
          description: "Develop an online store",
          author: "John Doe",
          progression: 40,
          status: "Active",
        },
        {
          id: 2,
          name: "Mobile App Development",
          description: "Build a cross-platform mobile app",
          author: "Jane Smith",
          progression: 60,
          status: "Inactive",
        },
        {
          id: 3,
          name: "Data Analytics Dashboard",
          description: "Create a data visualization tool",
          author: "Bob Johnson",
          progression: 75,
          status: "Active",
        },
        {
          id: 4,
          name: "Customer Support Portal",
          description: "Build a portal for customer inquiries",
          author: "Alice Williams",
          progression: 20,
          status: "Inactive",
        },
        {
          id: 5,
          name: "Marketing Campaign",
          description: "Plan and execute a marketing campaign",
          author: "Michael Brown",
          progression: 90,
          status: "Active",
        },
        {
          id: 6,
          name: "Product Launch",
          description: "Prepare for a product launch event",
          author: "Emily Davis",
          progression: 100,
          status: "Active",
        },
        {
          id: 7,
          name: "Software Upgrade",
          description: "Upgrade existing software to the latest version",
          author: "Chris Wilson",
          progression: 55,
          status: "Active",
        },
        {
          id: 8,
          name: "Financial Report",
          description: "Generate quarterly financial report",
          author: "Sarah Miller",
          progression: 30,
          status: "Inactive",
        },
        {
          id: 9,
          name: "Inventory Management",
          description: "Optimize inventory management system",
          author: "Daniel Taylor",
          progression: 70,
          status: "Active",
        },
        {
          id: 10,
          name: "Website Redesign",
          description: "Redesign company website",
          author: "Olivia Anderson",
          progression: 45,
          status: "Active",
        },
        {
          id: 11,
          name: "Social Media Campaign",
          description: "Launch a social media advertising campaign",
          author: "James Moore",
          progression: 80,
          status: "Active",
        },
        {
          id: 12,
          name: "HR Onboarding Process",
          description: "Streamline the employee onboarding process",
          author: "Sophia Clark",
          progression: 95,
          status: "Active",
        },
        {
          id: 13,
          name: "Customer Survey",
          description: "Conduct a customer satisfaction survey",
          author: "David White",
          progression: 25,
          status: "Inactive",
        },
        {
          id: 14,
          name: "Quality Assurance Testing",
          description: "Perform QA testing on software",
          author: "Emma Hall",
          progression: 60,
          status: "Active",
        },
        {
          id: 15,
          name: "Content Creation",
          description: "Create marketing content",
          author: "William Turner",
          progression: 50,
          status: "Inactive",
        },
        {
          id: 16,
          name: "Budget Planning",
          description: "Plan annual budget",
          author: "Ava Scott",
          progression: 70,
          status: "Active",
        },
        {
          id: 17,
          name: "Product Development",
          description: "Develop a new product",
          author: "Liam Harris",
          progression: 40,
          status: "Inactive",
        },
        {
          id: 18,
          name: "Employee Training",
          description: "Provide training sessions for employees",
          author: "Mia Rodriguez",
          progression: 85,
          status: "Active",
        },
        {
          id: 19,
          name: "IT Infrastructure Upgrade",
          description: "Upgrade IT infrastructure",
          author: "Noah Martinez",
          progression: 65,
          status: "Active",
        },
        {
          id: 20,
          name: "Market Research",
          description: "Conduct market research",
          author: "Ella Lewis",
          progression: 75,
          status: "Active",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.booking-view {
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid $brand-color-light;
}
</style>
