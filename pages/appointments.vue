<script setup>
import { ref, computed } from 'vue'

// Reactive data
const selectedDate = ref(null)
const selectedTimes = ref([]) // Changed to array for multiple selection
const condition = ref('')

// Available time slots
const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '14:00', '14:30',
  '15:00', '15:30'
]

// Calendar configuration
const calendarConfig = {
  mode: 'date',
  minDate: new Date(),
  maxDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
  disabledDates: (date) => {
    // Disable Saturday (6) and Sunday (0)
    const dayOfWeek = date.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
  }
}

// Computed properties
const isFormValid = computed(() => {
  return selectedDate.value && selectedTimes.value.length > 0
})

const formattedDate = computed(() => {
  if (!selectedDate.value) return 'No date selected'
  return new Date(selectedDate.value).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Methods
const toggleTimeSlot = (time) => {
  const index = selectedTimes.value.indexOf(time)
  if (index > -1) {
    selectedTimes.value.splice(index, 1)
  } else {
    selectedTimes.value.push(time)
  }
}

const isTimeSelected = (time) => {
  return selectedTimes.value.includes(time)
}

const bookAppointment = () => {
  if (!isFormValid.value) {
    return
  }
  
  // Handle appointment booking logic here
  console.log('Booking appointment:', {
    date: selectedDate.value,
    times: selectedTimes.value,
    condition: condition.value
  })
  
  // You can add API call or navigation logic here
}

const resetForm = () => {
  selectedDate.value = null
  selectedTimes.value = []
  condition.value = ''
}
</script>

<template>
  <div class="mx-auto">
    <!-- Header -->
    <UCard class="mb-4">
      <template #header>
        <h4 class="mb-0 text-2xl element-header font-bold">Book Appointment</h4>
        <small>
          For chest pain and/or shortness of breath, call 999. When the surgery is closed please dial 111 where you will be directed to the most appropriate service.
        </small>
      </template>
    </UCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Left Column - Calendar and Time Selection -->
      <div class="lg:col-span-2 space-y-4">
        <!-- Calendar and Time Selection Side by Side -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Select Date & Preferred Times</h2>
          </template>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Calendar Column -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Choose Date</h3>
              <div class="flex justify-center">
                <UCalendar
                  v-model="selectedDate"
                  size="md"
                  :config="calendarConfig"
                  class="w-full max-w-sm"
                />
              </div>
              <div class="text-center text-sm text-gray-500">
                We are closed on weekends and bank holidays.
              </div>
            </div>

            <!-- Time Selection Column -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium">Available Time Slots</h3>
              <p class="text-sm text-gray-600">Select multiple preferred times (we'll confirm the best available slot)</p>
              
              <div class="grid grid-cols-4 gap-2">
                <UButton
                  v-for="time in timeSlots"
                  :key="time"
                  :variant="isTimeSelected(time) ? 'solid' : 'outline'"
                  color="primary"
                  size="lg"
                  @click="toggleTimeSlot(time)"
                  class="text-center"
                >
                  {{ time }}
                </UButton>
              </div>
              
              <div v-if="selectedTimes.length > 0" class="text-sm text-gray-600">
                <strong>Selected:</strong> {{ selectedTimes.join(', ') }}
              </div>
            </div>
          </div>
        </UCard>

        <!-- Condition Description -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Describe Condition</h2>
          </template>
          
          <UTextarea
            v-model="condition"
            :disabled="!selectedDate"
            placeholder="Please describe your symptoms or reason for the appointment..."
            :rows="6"
            class="w-full"
          />
        </UCard>
      </div>

      <!-- Right Column - Summary and Actions -->
      <div class="space-y-4">
        <!-- Appointment Summary -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">Appointment Summary</h3>
          </template>
          
          <div class="space-y-3">
            <div v-if="selectedDate" class="flex flex-col gap-1">
              <span class="text-sm text-gray-600">Date:</span>
              <span class="font-medium">{{ formattedDate }}</span>
            </div>
            
            <div v-if="selectedTimes.length > 0" class="flex flex-col gap-1">
              <span class="text-sm text-gray-600">Preferred Times:</span>
              <div class="flex flex-wrap gap-1">
                <UBadge 
                  v-for="time in selectedTimes" 
                  :key="time"
                  variant="soft"
                  size="sm"
                >
                  {{ time }}
                </UBadge>
              </div>
            </div>
            
            <div v-if="condition" class="flex flex-col gap-1">
              <span class="text-sm text-gray-600">Condition:</span>
              <span class="text-sm">{{ condition.substring(0, 100) }}{{ condition.length > 100 ? '...' : '' }}</span>
            </div>
          </div>
        </UCard>

        <!-- Action Buttons -->
        <div class="space-y-3">
          <UButton
            @click="bookAppointment"
            :disabled="!isFormValid"
            size="lg"
            color="primary"
            class="w-full"
            block
          >
            Book Appointment
          </UButton>
          
          <UButton
            @click="resetForm"
            variant="outline"
            size="lg"
            color="secondary"
            class="w-full"
            block
          >
            Reset Form
          </UButton>
        </div>

        <!-- Help Information -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold">Need Help?</h3>
          </template>
          
          <div class="space-y-2 text-sm text-gray-600">
            <p>• Select multiple time preferences</p>
            <p>• We'll confirm the best available slot</p>
            <p>• Emergency? Call 999</p>
            <p>• After hours? Dial 111</p>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
