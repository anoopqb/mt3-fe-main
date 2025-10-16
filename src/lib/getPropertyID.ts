/**
 * Fetches propertyID from the headers API
 * @returns {Promise<string>} The property ID or default value
 */
export async function getPropertyID(): Promise<string> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/headers?filters[slug]=header&pLevel=8`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            console.error('Failed to fetch propertyID from headers API');
            return 'CB3DB4'; // Default fallback
        }

        const data = await response.json();
        return data.data[0]?.PropertyID || 'CB3DB4';
    } catch (error) {
        console.error('Error fetching propertyID:', error);
        return 'CB3DB4'; // Default fallback
    }
}

