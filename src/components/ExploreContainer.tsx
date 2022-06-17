/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useFormikContext } from "formik";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { getFieldProps, getFieldMeta, setFieldValue } = useFormikContext();

  const Calc = () => {
    let input1 = getFieldProps("input1").value;
    let input2 = getFieldProps("input2").value;
    let input3 = getFieldProps("input3").value;

    let total = input1 + input2 + input3;

    setFieldValue("sum", total);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFieldValue(name, +value);

    Calc();
  };

  return (
    <>
      <IonItem>
        <IonLabel position="stacked">Input 1</IonLabel>
        <IonInput
          type="number"
          name="input1"
          onIonChange={handleInputChange}
          value={getFieldProps("input1").value}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Input 2</IonLabel>
        <IonInput
          type="number"
          name="input2"
          onIonChange={handleInputChange}
          value={getFieldProps("input2").value}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Input 3</IonLabel>
        <IonInput
          type="number"
          name="input3"
          onIonChange={handleInputChange}
          value={getFieldProps("input3").value}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Sum</IonLabel>
        <IonInput
          type="number"
          name="sum"
          onIonChange={handleInputChange}
          value={getFieldProps("sum").value}
        />
      </IonItem>
      <IonButton type="submit">Calculate</IonButton>
    </>
  );
};

export default ExploreContainer;
