const app = Vue.createApp({
  data() {
    const birthDate = new Date('1987-05-08'); // Define the birth date
    const today = new Date(); // Get the current date

    // Calculate age
    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const ageInYears = ageDate.getUTCFullYear() - 1970; // Calculate age in years
    const ageInMonths = ageDate.getUTCMonth(); // Calculate age in months
    const ageInDays = ageDate.getUTCDate() - 1; // Subtract 1 to get days (starting from 0)

    // Calculate time until next birthday
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeUntilNextBirthday = nextBirthday - today;
    const monthsUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24 * 30)); // Approximate months
    const daysUntilNextBirthday = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)); // Remaining days

    return {
      nama: 'Eko Santoso',
      tanggal_lahir: '08 Mei 1987',
      age: `${ageInYears} tahun ${ageInMonths} bulan ${ageInDays} hari`,
      futureAge: `${monthsUntilNextBirthday} bulan ${daysUntilNextBirthday} hari`,
      kocok: 1
    };
  },
  mounted() {
    this.kocok = Math.random();
  }
});

app.mount('#tugas');
