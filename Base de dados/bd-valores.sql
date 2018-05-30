INSERT INTO Cliente(email, password, username, nome, telefone, telemovel, morada) VALUES ('admin','admin','admin','admin','','','');

INSERT INTO Pais VALUES ('P','Portugal','Lisboa',92080,9865114);

INSERT INTO Cidade VALUES ('Lisboa','P',807937,-9.13333,38.7167);
INSERT INTO Cidade VALUES ('Braga','P',63033,NULL,NULL);
INSERT INTO Cidade VALUES ('Coimbra','P',74616,NULL,NULL);
INSERT INTO Cidade VALUES ('Porto','P',327368,NULL,NULL);
INSERT INTO Cidade VALUES ('Setubal','P',77885,NULL,NULL);
INSERT INTO Cidade VALUES ('Amadora','P',95518,NULL,NULL);
INSERT INTO Cidade VALUES ('Vila Nova de Gaia','P',62468,NULL,NULL);
INSERT INTO Cidade VALUES ('Barreiro','P',50863,NULL,NULL);
INSERT INTO Cidade VALUES ('Funchal','P',44111,NULL,NULL);
INSERT INTO Cidade VALUES ('Almada','P',42607,NULL,NULL);

INSERT INTO EntidadePublica VALUES ('Policia Municipal de Lisboa','+351 808 202 036','P','Lisboa','Autoridade');
INSERT INTO EntidadePublica VALUES ('GNR Posto Territorial de Trafaria','+351 265 242 596','P','Almada','Autoridade');
INSERT INTO EntidadePublica VALUES ('INEM','+351 213 508 100','P','Lisboa','Paramédico');
INSERT INTO EntidadePublica VALUES ('Bombeiros Voluntários da Trafaria','+351 212 950 093','P','Almada','Bombeiro');