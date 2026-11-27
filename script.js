document.addEventListener('DOMContentLoaded', () => {
            const bookingForm = document.getElementById('bookingForm');
            const bookingSuccess = document.getElementById('bookingSuccess');
            const bookingMessage = document.getElementById('bookingMessage');

            if (bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    try {
                        const nama = document.getElementById('nama').value.trim();
                        const jurusan = document.getElementById('jurusan').value.trim();
                        const matkul = document.getElementById('matkul').value.trim();
                        const jadwal = document.getElementById('jadwal').value;

                        bookingMessage.textContent = `Halo ${nama}! Kami sedang mencocokkan tutor senior ${jurusan} untuk mata kuliah "${matkul}" (${jadwal}). Tim Bimbly akan segera menghubungimu!`;
                        bookingSuccess.classList.remove('hidden');
                        bookingForm.reset();
                    } catch (err) {
                        console.error('Terjadi kesalahan saat memproses form:', err);
                    }
                });
            }
        });