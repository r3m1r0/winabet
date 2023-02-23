import { IonDatetime, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Redirect } from 'react-router';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WinABet</IonTitle>
          <Redirect to={"/Tab1"} />
          <IonButton shape="round"
            type='submit'>Connexion
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listes des matchs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>
                <h1>Résultat des Matchs</h1>
              </IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel class="ion-justify-content-center">
                <h1>Equipe 1</h1>
              </IonLabel>
              <IonLabel class="ion-justify-content-center">
                <label>Date : xx/xx/xx</label>
                <label>Heure : xx:xx</label>
              </IonLabel>
              <IonLabel class="ion-justify-content-center">
                <h1>Equipe 2</h1>
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
        <IonItem>
          <IonItemGroup>
            <IonLabel>
              <h1>Enregistrer un match</h1>
            </IonLabel>
            <form>
              <IonItem>
                <IonLabel >Equipe 1:</IonLabel>
                <IonInput name='team1' />
              </IonItem>
              <IonItem>
                <IonLabel >Equipe 2:</IonLabel>
                <IonInput name='team2' />
              </IonItem>
              <IonButton shape="round">
                Enregistrer le Match
              </IonButton>
            </form>
          </IonItemGroup>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
