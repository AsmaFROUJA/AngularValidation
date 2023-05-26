import { Profession } from './profession.model';
export class ProfessionWrapper{
_embedded!: { professions: Profession[]};
}
