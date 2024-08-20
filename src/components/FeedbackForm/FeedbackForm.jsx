import { Formik, Form, Field } from 'formik';
import css from './FeedbackForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const initialValues = {
  username: '',
  email: '',
};

export default function FeedbackForm() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    message: Yup.string()
      .min(3, 'Too short')
      .max(256, 'Too long')
      .required('Required'),
    level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
  });
  const id = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={`${id}-username`}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={`${id}-username`}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div>
          <label htmlFor={`${id}-email`}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`${id}-email`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div>
          <label htmlFor={`${id}-message`}>Message</label>
          <Field
            className={css.message}
            as="textarea"
            name="message"
            id={`${id}-message`}
            rows="5"
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>

        <div>
          <label htmlFor={`${id}-level`}>Service satisfaction level</label>
          <Field
            className={css.field}
            as="select"
            name="level"
            id={`${id}-level`}
          >
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

{
  /* <Field type="text" name="username" />
				<Field type="email" name="email" /> */
}

// import { Formik } from 'formik';

// const FeedbackForm = () => {
//   return (
//     <Formik initialValues={{}} onSubmit={() => {}}>
//       ...
//     </Formik>
//   );
// };
