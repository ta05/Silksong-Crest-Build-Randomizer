import { Slot } from "./Slot";

export class Crest {
    public name: string = "";
    public silkSkills: {size: number, slots: (Slot | null)[] } = {size: 0, slots: []};
    public redTools: {size: number, slots: (Slot | null)[] } = {size: 0, slots: []};
    public blueTools: {size: number, slots: (Slot | null)[] } = {size: 0, slots: []};
    public yellowTools: {size: number, slots: (Slot | null)[] } = {size: 0, slots: []};


    constructor(name: string, numSilkSkills: number, numRedTools: number, numBlueTools: number, numYellowTools: number) {
        this.name = name;
        this.silkSkills.size = numSilkSkills;
        this.redTools.size = numRedTools;
        this.blueTools.size = numBlueTools;
        this.yellowTools.size = numYellowTools;
    }

    toString(): string {
        return `${this.name} Crest - \nSilk Skills: ${this.silkSkills.slots.map(slot => slot ? slot.getName() : "Empty")}, \nRed Tools: ${this.redTools.slots.map(slot => slot ? slot.getName() : "Empty")}, \nBlue Tools: ${this.blueTools.slots.map(slot => slot ? slot.getName() : "Empty")}, \nYellow Tools: ${this.yellowTools.slots.map(slot => slot ? slot.getName() : "Empty")}`;
    }
}