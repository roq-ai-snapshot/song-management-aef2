import * as yup from 'yup';

export const songValidationSchema = yup.object().shape({
  title: yup.string().required(),
  artist: yup.string().required(),
  album: yup.string().nullable(),
  genre: yup.string().nullable(),
  release_date: yup.date().nullable(),
  organization_id: yup.string().nullable().required(),
});
