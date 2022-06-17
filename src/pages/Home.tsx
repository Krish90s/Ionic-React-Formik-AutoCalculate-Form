import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Home.css";

const initialValues = {
  input1: 0,
  input2: 0,
  input3: 0,
  input4: 0,
  sum: 0,
};
const validationSchema = Yup.object().shape({
  input1: Yup.number().required("Input1 required"),
  input2: Yup.number().required("Input2 required"),
  input3: Yup.number().required("Input3 required"),
  input4: Yup.number().required("Input4 required"),
  sum: Yup.number().required("Sum required"),
});

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={async (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formikProps) => (
            <Form
              onSubmit={async (e: any) => {
                e.preventDefault();
                formikProps.handleSubmit();
                console.log(formikProps.values);
              }}
            >
              <ExploreContainer />
            </Form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default Home;
