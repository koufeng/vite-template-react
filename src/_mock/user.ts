import { faker, type SexType } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

export interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

function createRandomUser(): User {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

export const _user = createRandomUser();
export const _users = [...Array(10)].map(() => createRandomUser());
