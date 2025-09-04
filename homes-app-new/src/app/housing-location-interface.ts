// Simple TypeScript interface describing the shape of a housing object
// Used for typing inputs and data throughout the app
export interface HousingLocationInterface
{
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
}
