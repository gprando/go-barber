import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: ' gprando@gmail.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'gabriel prando',
      email: 'gabriel@gmail.com',
    });

    expect(updatedUser.name).toBe('gabriel prando');
    expect(updatedUser.email).toBe('gabriel@gmail.com');
  });

  it('should be able utpdate the profile from non-existing user', async () => {
    await expect(
      updateProfileService.execute({
        user_id: 'non-existing-user',
        name: 'test',
        email: 'test',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'gabriel',
      email: 'gprando@gmail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'test',
      email: 'test@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'gabriel prando',
        email: 'gprando@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: ' gprando@gmail.com',
      password: '123123',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'gabriel prando',
      email: 'gabriel@gmail.com',
      old_password: '123123',
      password: '123456',
    });

    expect(updatedUser.password).toBe('123456');
  });

  it('should be not able to update the password without oldpassword', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: ' gprando@gmail.com',
      password: '123123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'gabriel prando',
        email: 'gabriel@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be not able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'gabriel',
      email: ' gprando@gmail.com',
      password: '123123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'gabriel prando',
        email: 'gabriel@gmail.com',
        old_password: 'wrong-old-password',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
