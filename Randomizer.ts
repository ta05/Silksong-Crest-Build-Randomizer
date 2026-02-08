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
const silkSkills: string[] = ["Silk Spear", "Thread Storm", "Cross Stitch", "Sharp Dart", "Rune Rage", "Pale Nails"];
const redTools: string[] = ["Straight Pin", "Threefold Pin", "Sting Shard", "Tacks", "Longpin", "Curveclaw/Curvesickle", "Throwing Ring", "Pimpillo", "Conchcutter", "Silkshot", "Delver's Drill", "Cogwork Wheel", "Cogfly", "Rosary Cannon", "Voltvessels", "Flintslate", "Snare Setter", "Flea Brew", "Plasmium Phial"];
const blueTools: string[] = [];
const yellowTools: string[] = [];

export const randomizeCrest = (): Crest => {
    const randomCrestName = crestNames[Math.floor(Math.random() * crestNames.length)];
    const attributes = crestAttributes[randomCrestName];
    return new Crest(randomCrestName, attributes.silk, attributes.red, attributes.blue, attributes.yellow);
};

const randomizeTool = (crest: Crest, toolList: string[], toolKey: 'silkSkills' | 'redTools' | 'blueTools' | 'yellowTools'): Crest => {
    let shuffle: string[] = [...toolList];
    for (let i = 0; i < crest[toolKey].size; i++) {
        const randomIndex = Math.floor(Math.random() * (shuffle.length + 1));
        if (randomIndex < shuffle.length) {
            crest[toolKey].slots.push(new Slot(shuffle[randomIndex]));
            shuffle = shuffle.slice(0, randomIndex).concat(shuffle.slice(randomIndex + 1));
        }
        else {
            if (Math.random() < 0.1) {
                crest[toolKey].slots.push(null);
            }
            else {
                i--;
            }
        }
    }
    return crest;
}

export const randomizeTools = (crest: Crest): Crest => {
    crest = randomizeTool(crest, silkSkills, 'silkSkills');
    crest = randomizeTool(crest, redTools, 'redTools');
    crest = randomizeTool(crest, blueTools, 'blueTools');
    crest = randomizeTool(crest, yellowTools, 'yellowTools');
    return crest;
}

export const display = (crest: Crest): void => {
    console.log(`${crest.name}`);
    crest.silkSkills.slots.forEach((skill, index) => {
        console.log(`    Silk Skill Slot ${index + 1}: ${skill ? skill.getName() : "Empty"}`);
    });
    crest.redTools.slots.forEach((tool, index) => {
        console.log(`    Red Tool Slot ${index + 1}: ${tool ? tool.getName() : "Empty"}`);
    });
    crest.blueTools.slots.forEach((tool, index) => {
        console.log(`    Blue Tool Slot ${index + 1}: ${tool ? tool.getName() : "Empty"}`);
    });
    crest.yellowTools.slots.forEach((tool, index) => {
        console.log(`    Yellow Tool Slot ${index + 1}: ${tool ? tool.getName() : "Empty"}`);
    });
}