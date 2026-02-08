import { Crest } from "./Crest";
import { Slot } from "./Slot";

const crestAttributes: { [key: string]: { silk: number; red: number; blue: number; yellow: number } } = {
    Hunter: {
        silk: 1,
        red: 2,
        blue: 2,
        yellow: 2,
    },
    Reaper: {
        silk: 1,
        red: 2,
        blue: 2,
        yellow: 2,
    },
    Wanderer: {
        silk: 1,
        red: 1,
        blue: 2,
        yellow: 3,
    },
    Beast: {
        silk: 1,
        red: 2,
        blue: 0,
        yellow: 2,
    },
    Witch: {
        silk: 1,
        red: 2,
        blue: 3,
        yellow: 0,
    },
    Architect: {
        silk: 0,
        red: 3,
        blue: 2,
        yellow: 2,
    },
    Shaman: {
        silk: 3,
        red: 0,
        blue: 2,
        yellow: 0,
    },
};
const crestNames: string[] = ["Hunter", "Reaper", "Wanderer", "Beast", "Witch", "Architect", "Shaman"];
const redTools: string[] = ["Straight Pin", "Threefold Pin", "Sting Shard", "Tacks", "Longpin", "Curveclaw/Curvesickle", "Throwing Ring", "Pimpillo", "Conchcutter", "Silkshot", "Delver's Drill", "Cogwork Wheel", "Cogfly", "Rosary Cannon", "Voltvessels", "Flintslate", "Snare Setter", "Flea Brew", "Plasmium Phial"];
const blueTools: string[] = [];
const yellowTools: string[] = [];

export const randomizeCrest = (): Crest => {
    const randomCrestName = crestNames[Math.floor(Math.random() * crestNames.length)];
    const attributes = crestAttributes[randomCrestName];
    return new Crest(randomCrestName, attributes.silk, attributes.red, attributes.blue, attributes.yellow);
};

export const randomizeTools = (crest: Crest): Crest => {
    let shuffle = [...redTools];
    for (let i = 0; i < crest.redTools.size; i++) {
        const randomIndex = Math.floor(Math.random() * (shuffle.length + 1));
        if (randomIndex < shuffle.length) {
            crest.redTools.slots.push(new Slot(shuffle[randomIndex]));
            shuffle = shuffle.slice(0, randomIndex).concat(shuffle.slice(randomIndex + 1));
        }
        else {
            crest.redTools.slots.push(null);
        }
    }
    return crest;
}

export const display = (crest: Crest): void => {
    console.log(`${crest.name}`);
    crest.redTools.slots.forEach((tool, index) => {
        console.log(`    Red Tool Slot ${index + 1}: ${tool ? tool.getName() : "Empty"}`);
    });
}