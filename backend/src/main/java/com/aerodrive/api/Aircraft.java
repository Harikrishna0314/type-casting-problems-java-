package com.aerodrive.api;
import java.util.List;
public record Aircraft(long id,String slug,String name,String manufacturer,String country,String category,String firstFlight,String description,double lengthM,double wingspanM,double heightM,String maxSpeed,int rangeKm,String crew,String engines,String status,String role,int ceilingM,List<String> history,List<Variant> variants,List<String> keyFacts){
  public record Variant(String name,String notes){}
}
