(() => {
    const startDate = Date.UTC(2022, 0, 1);
    const sentence = 'Since 2022, our Bhojana Shala has provided free meals every day to thousands of people every day';

    function updateMealMilestone() {
        const milestone = document.querySelector('#impact .stats article');
        if (!milestone) return;

        const value = milestone.querySelector('strong');
        const description = milestone.querySelector('span');
        if (!value || !description) return;

        const now = new Date();
        const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
        const daysSinceOpening = Math.max(0, Math.floor((today - startDate) / 86400000));
        const meals = `${(daysSinceOpening * 1000).toLocaleString()}+`;

        if (value.textContent !== meals) value.textContent = meals;
        if (document.documentElement.lang === 'en' && description.textContent !== sentence) {
            description.textContent = sentence;
        }
    }

    const observer = new MutationObserver(updateMealMilestone);
    observer.observe(document.querySelector('#app') || document.body, { childList: true, subtree: true });
    updateMealMilestone();
})();
