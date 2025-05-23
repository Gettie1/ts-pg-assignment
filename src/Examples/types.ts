// Database table interfaces
export interface Customer {
    customer_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;  // Changed from Date to string to match VARCHAR(20)
    gender: string;
}

export interface PassengerFlight {
    customer_id: number;    // Changed to number to match INT
    aircraft_id: string;
    route_id: number;      // Changed to number to match INT
    depart: string;
    arrival: string;
    seat_num: string;
    class_id: string;
    travel_date: string;   // Changed from Date to string to match VARCHAR(20)
    flight_num: string;
}

export interface TicketDetail {
    p_date: string;        // Changed from Date to string to match VARCHAR(20)
    customer_id: number;   // Changed to number to match INT
    aircraft_id: string;
    class_id: string;
    no_of_tickets: number;
    a_code: string;
    price_per_ticket: number;
    brand: string;
}

export interface Route {
    route_id: number;      // Changed to number to match INT
    flight_num: string;
    origin_airport: string;
    destination_airport: string;
    aircraft_id: string;
    distance_miles: number;
}

// Query result interfaces
export interface PassengerDetail {
    flight_num: string;
    first_name: string;
    last_name: string;
    seat_num: string;
    travel_date: Date;
}

export interface CustomerFlight extends Customer {
    flight_num?: string;
    travel_date?: Date;
}

export interface ComprehensiveFlight {
    first_name: string;
    last_name: string;
    flight_num: string;
    origin_airport: string;
    destination_airport: string;
    price_per_ticket: number;
    brand: string;
}

export interface SameDistanceRoute {
    flight1: string;
    flight2: string;
    distance_miles: number;
}

export interface RouteTicket {
    flight_num: string;
    origin_airport: string;
    destination_airport: string;
    brand: string | null;
    price_per_ticket: number | null;
}

// Grouping query result interfaces
export interface RouteStats {
    origin_airport: string;
    total_flights: number;
    avg_distance: number;
    min_distance: number;
    max_distance: number;
}

export interface CustomerBookingStats {
    customer_id: string;
    first_name: string;
    last_name: string;
    total_bookings: number;
    total_spent: number;
    avg_ticket_price: number;
}

export interface AircraftLoadStats {
    aircraft_id: string;
    flight_num: string;
    total_passengers: number;
    occupancy_rate: number;
}

export interface BrandPerformance {
    brand: string;
    total_revenue: number;
    tickets_sold: number;
    avg_ticket_price: number;
}

export interface FlightClassStats {
    class_id: string;
    total_passengers: number;
    avg_ticket_price: number;
    total_revenue: number;
}

export interface MonthlyBookingTrend {
    booking_month: Date;
    total_bookings: number;
    avg_ticket_price: number;
    total_revenue: number;
}

// Set Operations query result interfaces
export interface CustomerRoute {
    customer_id: string;
    first_name: string;
    last_name: string;
    flight_num: string;
    origin_airport: string;
    destination_airport: string;
}

export interface FlightComparison {
    flight_num: string;
    origin: string;
    destination: string;
    price: number;
}

export interface CustomerRoute {
    customer_id: string;
    first_name: string;
    last_name: string;
    flight_num: string;
    origin_airport: string;
    destination_airport: string;
}

export interface FlightComparison {
    flight_num: string;
    origin: string;
    destination: string;
    price: number;
}

//conditionals query types

export interface customerGenderNumber{
    Males: number;
    Females: number;
}

export interface avgTicketPrice extends TicketDetail{
    price_diff?:number
}

export interface milesToString extends Route{
    distance_mile_str: string;
}

export interface cubeExampleType extends PassengerFlight{
    total_ticekts: number;
}