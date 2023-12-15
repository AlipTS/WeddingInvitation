// Skrip untuk memuat dan menampilkan data dari file data.json

// Fungsi untuk memuat data dari file JSON
function loadData(callback) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Fungsi untuk menampilkan data pada halaman
function displayData(data) {
    document.getElementById('coupleName').textContent = data.couple.name;
    document.getElementById('weddingDate').textContent = data.couple.weddingDate;
    document.getElementById('loveStoryContent').textContent = data.loveStory.content;
    document.getElementById('scheduleContent').textContent = data.schedule.content;
    document.getElementById('venue').textContent = data.location.venue;
    document.getElementById('address').textContent = data.location.address;
    document.getElementById('galleryContent').textContent = data.gallery.content;
    document.getElementById('rsvpDeadline').textContent = data.rsvp.deadline;
    document.getElementById('accommodationContent').textContent = data.accommodation.content;
    document.getElementById('guestbookContent').textContent = data.guestbook.content;
    document.getElementById('faqContent').textContent = data.faq.content;
}

// Memuat dan menampilkan data saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    loadData(displayData);
});
