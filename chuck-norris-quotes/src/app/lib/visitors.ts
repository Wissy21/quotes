export async function getVisitorCount() {
    try {
        const response = await fetch(`/api/visitors`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        return 0;
    }
}