import {request} from "https"


export interface APIReply {
    data: string
    error?: string
}

export enum CB_ENDPOINTS {
    BIRB = "birb",
    BIRD = "bird",
    CAR = "car",
    CAT = "cat",
    CRAB = "crab",
    DOG = "dog",
    DOLPHIN = "dolphin",
    DUCK = "duck",
    FANTASY_ART = "fantasy-art",
    FERRET = "ferret",
    FOX = "fox",
    HEDGEHOG = "hedgehog",
    JELLYFISH = "jellyfish",
    KANGAROO = "kangaroo",
    KOALA = "koala",
    NATURE = "nature",
    OTTER = "otter",
    OWL = "owl",
    PANDA = "panda",
    PENGUIN = "penguin",
    PLANE = "plane",
    RABBIT = "rabbit",
    RACCOON = "raccoon",
    RED_PANDA = "red-panda",
    SNAKE = "snake",
    SPACE = "space",
    TURTLE = "turtle",
    WALLABY = "wallaby",
    WHALE = "whale",
    WOLF = "wolf"
}

export enum CB_MC_BACKGROUND {
    DEFAULT="default",
    NETHER="nether",
    NIGHT="night",
    SUNSET="sunset"
}

export class CheweyBotAPI{
    private token:string;

    constructor(token:string){
        this.token=token;
    }

    image(endpoint: CB_ENDPOINTS): Promise<String>{
        return this.APIGet(endpoint).then((res:APIReply)=>{
            if(res.error){
                return Promise.reject(res.error)
            }else{
                return res.data
            }
        })
    }

    mcLookup(ip: string, port: number, background: CB_MC_BACKGROUND = CB_MC_BACKGROUND.DEFAULT):Promise<String>{
        if (isNaN(port) || port < 0 || 65535 < port){
            return Promise.reject("Invalid Port provided")
        }
        return this.APIGet(`mcap/server/${encodeURIComponent(ip)}/${port}/${background}`).then((res: APIReply) => {
            if (res.error) {
                return Promise.reject(res.error)
            } else {
                return res.data
            }
        })
    }

    private APIGet(path:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            const options = {
                "method": "GET",
                "hostname": "api.chewey-bot.top",
                "path": "/" + path,
                "headers": {
                    "Authorization": this.token
                }
            };
            var req = request(options, function (res) {
                var chunks = "";
    
                res.on("data", function (chunk) {
                    chunks += chunk;
                });
    
                res.on("end", function () {
                    try {
                        resolve(JSON.parse(chunks))
                    } catch (e) {
                        reject(e)
                    }
                });
            });
    
            req.end();
        })
    }
}