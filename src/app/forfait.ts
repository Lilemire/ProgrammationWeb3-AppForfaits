export interface Forfait {
    id: number;
    nom: string,
    description: string,
    code: string,
    catégories: string,
    etablissement: {
        id: number;
        nom: string,
        description: string;
    },
    datedebut: string,
    datefin: string,
    prix: number,
    avis: string;
}