document.addEventListener('DOMContentLoaded', function() {

    const profileImageContainer = document.querySelector('.profile-image-container');
    window.addEventListener('scroll', function() {
        const rect = profileImageContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            profileImageContainer.classList.add('slide-in-active');
        }
    });
    profileImageContainer.classList.add('slide-in-active');
});
