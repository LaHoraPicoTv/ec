 document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Video upload functionality
        document.getElementById('videoUpload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const videoURL = URL.createObjectURL(file);
                const video = document.getElementById('featuredVideo');
                const videoSource = document.getElementById('videoSource');
                const uploadPrompt = document.getElementById('uploadPrompt');
                
                videoSource.src = videoURL;
                video.load();
                video.style.display = 'block';
                uploadPrompt.style.display = 'none';
            }
        });

        // News item click
        document.querySelectorAll('.news-item h3').forEach(item => {
            item.addEventListener('click', function() {
                alert('Abrir noticia: ' + this.textContent);
            });
        });