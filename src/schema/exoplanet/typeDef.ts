import { gql } from 'apollo-server';

export const typeDef = gql`
  extend type Query {
    suitablePlanets(page: Int, page_size: Int): [Exoplanet]
  }

  extend type Mutation {
    installStation(planet_name: String, station_id: Int): [StationPlanets]
  }

  type Exoplanet {
    name: String
    coordinates: ExoplanetCoordinates
    mass: ExoplanetMeasure
    radius: ExoplanetMeasure
    inclination: ExoplanetMeasure
    semi_major_axis: ExoplanetMeasure
    orbital_period: ExoplanetMeasure
    eccentricity: ExoplanetMeasure
    omega_angle: ExoplanetMeasure
    anomaly_angle: ExoplanetMeasure
    lambda_angle: ExoplanetMeasure
    time_periastron: ExoplanetMeasure
    time_conjonction: ExoplanetMeasure
    angular_distance: ExoplanetMeasure
    tzero_primary_transit: ExoplanetMeasure
    tzero_secondary_transit: ExoplanetMeasure
    impact_parameter: ExoplanetMeasure
    tzero_radial_velocity: ExoplanetMeasure
    velocity_semiamplitude: ExoplanetMeasure
    calculated_temperature: ExoplanetMeasure
    measured_temperature: ExoplanetMeasure
    hottest_point_longitude: ExoplanetMeasure
    geometric_albedo: ExoplanetMeasure
    surface_gravity: ExoplanetMeasure
    detection_method: ExoplanetMeasure
    mass_detection_method: ExoplanetMeasure
    radius_detection_method: ExoplanetMeasure
    parent_star: ExoplanetMeasure
  }
  type ExoplanetCoordinatesResult {
    name: String
    coordinates: ExoplanetCoordinates
  }
  type ExoplanetCoordinates {
    system: String
    right_ascension: Float
    right_ascension_units: String
    declination: Float
    declination_units: String
    epoch: Float
  }
  type ExoplanetMeasure {
    value: Float
    unit: String
    error_max: Float
    error_min: Float
    bibcode: String
  }
  type StationPlanets {
    planet_name: String
    station_id: Int
  }

`
