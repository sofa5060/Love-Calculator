import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { refreshOutline } from "ionicons/icons";
import LoveData from "../hooks/LoveData";
import "./Home.css";

const Home: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [lovePercentage, setPercentage] = useState<string>("");
  const [loveResult, setResult] = useState<string>("");
  const { getLoveData } = LoveData();

  const handleSubmit = async () => {
    if (!firstName || !secondName) {
      console.log("is empty");
      return;
    }
    const res = await getLoveData(firstName, secondName);
    const { percentage, result } = res;
    setPercentage(percentage);
    setResult(result);
  };

  const handleReset = () => {
    setPercentage("");
    setFirstName("");
    setSecondName("");
    setResult("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Love Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-margin">
          <IonRow>
            <IonCol size="12" size-sm="6">
              <IonItem>
                <IonLabel position="floating">Your Name</IonLabel>
                <IonInput
                  onIonChange={(e) => setFirstName(e.detail.value!)}
                  value={firstName}
                ></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12" size-sm="6">
              <IonItem>
                <IonLabel position="floating">Your lover Name</IonLabel>
                <IonInput
                  onIonChange={(e) => setSecondName(e.detail.value!)}
                  value={secondName}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin">
            <IonCol className="ion-text-center">
              <IonButton
                type="submit"
                onClick={handleSubmit}
                className="ion-margin-end"
              >
                Submit
              </IonButton>
              {loveResult && (
                <IonButton
                  type="button"
                  color="danger"
                  fill="outline"
                  className="ion-margin-start"
                  onClick={handleReset}
                >
                  <IonIcon icon={refreshOutline} slot="start" />
                  Reset
                </IonButton>
              )}
            </IonCol>
          </IonRow>
          {lovePercentage && (
            <IonRow className="ion-margin">
              <IonCol className="ion-text-center">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>
                      The love percentage between {firstName} and {secondName}{" "}
                      is {lovePercentage}%
                    </IonCardTitle>
                    <IonCardSubtitle>{loveResult}</IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
