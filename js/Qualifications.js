document.addEventListener("DOMContentLoaded", () => {
  // Select the Qualifications section and timeline items
  const qualificationsSection = document.getElementById("Qualifications");
  const timelineItems =
    qualificationsSection.querySelectorAll(".timeline-item");

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the Qualifications section comes into view, trigger the animation for each timeline item
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = 1; // Make the item visible
              item.style.transform = "translateX(0)"; // Bring item to its normal position
            }, index * 200); // Delay each item by 200ms for a flowing effect
          });
          observer.unobserve(qualificationsSection); // Stop observing after triggering the animation
        }
      });
    },
    {
      threshold: 0.5, // The section must be at least 50% in view
    }
  );

  // Start observing the Qualifications section
  observer.observe(qualificationsSection);
});
