const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        // Hide all resume details
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Show the corresponding resume detail
        resumeDetails[idx].classList.add('active');
    });
});
