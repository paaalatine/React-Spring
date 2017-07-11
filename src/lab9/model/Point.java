package lab9.model;

import javax.persistence.*;

/**
 * Created by sonya on 24.06.17.
 */

@Entity
@Table(name = "points")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;
    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "entry")
    private boolean entry;
    @Column(name = "owner")
    private String owner;

    public long getId() { return id; }
    public void setId(long id) { this.id = id; }
    public double getX() {
        return x;
    }
    public void setX(double x) {
        this.x = x;
    }
    public double getY() {
        return y;
    }
    public void setY(double y) { this.y = y; }
    public double getR() {
        return r;
    }
    public void setR(double r) {
        this.r = r;
    }
    public boolean isEntry() {
        return entry;
    }
    public void setEntry(boolean inArea) {
        this.entry = inArea;
    }
    public String getOwner() { return owner; }
    public void setOwner(String owner) { this.owner = owner; }
}