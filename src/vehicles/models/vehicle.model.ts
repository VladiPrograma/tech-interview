export class Vehicle {
    id: string;
    color: string
    gear: "MANUAL" | "AUTO" | "MANUAL & AUTO"
    manufacturer: string
    year: number

    static fromJson(key: string, json: object): Vehicle {
      return {
        id: key,
        color: json["color"],
        gear: json["gear"],
        year: json["year"],
        manufacturer: json["manufacturer"],
      };
    }

    static JsonToList(json: object): Vehicle[] {
      let list : Vehicle[] = new Array();
      for (var id in json) {
        if (json.hasOwnProperty(id)) {
            list.push(Vehicle.fromJson(id, json[id]));
        }
      }
      return list;
    }
  }