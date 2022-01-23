package it.units.programmazione_web;

import java.util.ArrayList;
import java.util.Date;

public class Trip {
    private int id_trip;
    private int id_owner;
    private Date date;
    private String type;
    private Geometry geometry;
    private Properties properties;

    public int getTripId() { return id_trip; }
    public int getOwnerId() { return id_owner; }
    public Date getDate() { return date; }
    public String getType() {
        return type;
    }
    public Geometry getGeometry() {
        return geometry;
    }
    public Properties getProperties() {
        return properties;
    }
    public void setOwnerId(int id_owner) { this.id_owner = id_owner; }

    @Override
    public String toString() {
        return "Trip{" +
                "owner=" + id_owner +
                ", type='" + type + '\'' +
                ", geometry=" + geometry +
                ", properties=" + properties +
                '}';
    }

    public class Geometry{
        private String type;
        private ArrayList<ArrayList<Double>> coordinates;

        public String getType() {
            return type;
        }
        public ArrayList<ArrayList<Double>> getCoordinates() {
            return coordinates;
        }

        @Override
        public String toString() {
            return "Geometry{" +
                    "type='" + type + '\'' +
                    ", coordinates=" + coordinates +
                    '}';
        }
    }

    public class Properties{
        private String description;
        private String vehicle;
        private ArrayList<Integer> markers;

        public String getDescription() {
            return description;
        }
        public String getVehicle() {
            return vehicle;
        }
        public ArrayList<Integer> getMarkers() { return markers; }

        @Override
        public String toString() {
            return "Properties{" +
                    "description='" + description + '\'' +
                    ", vehicle='" + vehicle + '\'' +
                    ", markers=" + markers +
                    '}';
        }
    }

}


