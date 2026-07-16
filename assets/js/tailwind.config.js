// Tailwind theme customization.
// Add/rename colors here and use them anywhere as e.g. bg-cream-100, text-mujiPink.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFDFB',
                    100: '#FAF9F5', // Base background
                    200: '#F2EFE9', // Border and dark card background
                    300: '#E5E0D5',
                },
                mujiBlue: '#3B82F6', /* Subtle blue accent */
                mujiPink: '#EC4899', /* Cute pink highlight */
            }
        }
    }
}
