import { BehaviorSubject, from, Observable } from 'rxjs';
import { VTuber } from '../models/VTuber';
import { Organization } from '../models/Organization';
import { MeadRecipe } from '../models/mead_models/MeadRecipe';
import AppConfig from '../config/AppConfig';

class HttpService {
  private vtubersSubject = new BehaviorSubject<VTuber[]>([]);
  private orgSubject = new BehaviorSubject<Organization[]>([]);
  private meadSubject = new BehaviorSubject<MeadRecipe[]>([]);


  // --- VTUBERS ----------------------------------------------------

  getAllVTubers(): Observable<VTuber[]> {
    return from(
      fetch(AppConfig.api.vtuber.getAll)
        .then((res) => res.json())
        .then((data) => {
          const list = data.Vtubers as VTuber[];
          this.vtubersSubject.next(list);
          return list;
        })
    );
  }

  getCurrentVTubers(): VTuber[] {
    return this.vtubersSubject.getValue();
  }

  // --- ORGANIZATIONS ----------------------------------------------

  getAllOrganizations(): Observable<Organization[]> {
    return from(
      fetch(AppConfig.api.organization.getAll)
        .then((res) => res.json())
        .then((data) => {
          const list = data.Organizations as Organization[];
          this.orgSubject.next(list);
          return list;
        })
    );
  }

  getCurrentOrganizations(): Organization[] {
    return this.orgSubject.getValue();
  }

  // --- MEAD RECIPES -----------------------------------------------

  getAllMeadRecipes(): Observable<MeadRecipe[]> {
    return from(
      fetch(AppConfig.api.meadRecipe.getAll)
        .then((res) => res.json())
        .then((data) => {
          const list = data.Meads as MeadRecipe[];
          this.meadSubject.next(list);
          return list;
        })
    );
  }

  getCurrentMeadRecipes(): MeadRecipe[] {
    return this.meadSubject.getValue();
  }
}

const httpService = new HttpService();
export default httpService;
