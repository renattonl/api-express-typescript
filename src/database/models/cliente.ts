import { Table, Column, Model } from 'sequelize-typescript';

export type ClienteInterface = {
  nombres: string;
  apellidos: string;
  fecha_nacimiento: Date;
};

@Table({
  timestamps: true,
})
class Cliente extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  nombres: string;
  @Column
  apellidos: string;
  @Column
  fecha_nacimiento: Date;
}

export default Cliente;
