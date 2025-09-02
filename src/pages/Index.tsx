import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bodyParams, setBodyParams] = useState({
    height: 170,
    weight: 60,
    size: 'M'
  });

  const outfitCategories = [
    {
      title: 'Эконом',
      price: '5,000 - 15,000 ₽',
      description: 'Стильные комплекты для повседневной носки',
      color: 'bg-gray-100',
      items: ['Базовая рубашка', 'Классические брюки', 'Повседневная обувь']
    },
    {
      title: 'Премиум',
      price: '25,000 - 50,000 ₽',
      description: 'Качественная одежда известных брендов',
      color: 'bg-luxury-warm',
      items: ['Дизайнерская рубашка', 'Брюки премиум-класса', 'Кожаная обувь']
    },
    {
      title: 'Люкс',
      price: 'от 75,000 ₽',
      description: 'Эксклюзивные наряды от мировых домов моды',
      color: 'bg-luxury-gold',
      items: ['Кутюрная рубашка', 'Эксклюзивные брюки', 'Люксовая обувь']
    }
  ];

  const features = [
    {
      icon: 'User',
      title: 'Персональные параметры',
      description: 'Точный подбор одежды по вашим размерам и предпочтениям'
    },
    {
      icon: 'Sparkles',
      title: 'ИИ стилист',
      description: 'Умный алгоритм создает идеальные образы для любого случая'
    },
    {
      icon: 'CloudSun',
      title: 'Учет погоды',
      description: 'Подбор одежды с учетом климата вашего региона'
    },
    {
      icon: 'Crown',
      title: 'Премиум консультации',
      description: 'Персональные стилисты для создания luxury-образов'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Navigation */}
      <nav className="border-b border-luxury-gray/20 bg-luxury-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-bold text-luxury-black">
              LUXURY WARDROBE
            </div>
            <div className="hidden md:flex space-x-8 font-source">
              <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors">Подбор</a>
              <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors">Гардероб</a>
              <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors">Комплекты</a>
              <a href="#" className="text-luxury-black hover:text-luxury-gold transition-colors">Стилисты</a>
            </div>
            <Button className="bg-luxury-black hover:bg-luxury-gold text-luxury-white font-source">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-luxury-white to-luxury-warm/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-luxury-black mb-6">
                Персональный стиль
                <br />
                <span className="text-luxury-gold">нового уровня</span>
              </h1>
              <p className="font-source text-xl text-luxury-gray mb-12 max-w-2xl">
                ИИ-платформа для подбора одежды по индивидуальным параметрам тела, 
                бюджету и погодным условиям
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-luxury-black hover:bg-luxury-gold text-luxury-white font-source px-8 py-4">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Начать подбор
                </Button>
                <Button size="lg" variant="outline" className="border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-white font-source px-8 py-4">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/6fd0bae2-3329-4f8a-8c43-a30ccb3a8dba.jpg"
                alt="Luxury Fashion Outfit"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-luxury-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-luxury-black mb-4">
              Возможности платформы
            </h2>
            <p className="font-source text-luxury-gray max-w-2xl mx-auto">
              Передовые технологии для создания идеального гардероба
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-luxury-gray/20 hover:shadow-lg transition-shadow bg-luxury-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-playfair text-luxury-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-source text-luxury-gray text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Body Parameters Section */}
      <section className="py-16 bg-luxury-warm/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-luxury-black mb-4">
                Персональные параметры
              </h2>
              <p className="font-source text-luxury-gray">
                Укажите ваши данные для точного подбора одежды
              </p>
            </div>
            <Card className="border-luxury-gray/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <label className="font-source font-semibold text-luxury-black">Рост (см)</label>
                    <div className="space-y-2">
                      <Slider
                        value={[bodyParams.height]}
                        onValueChange={(value) => setBodyParams({...bodyParams, height: value[0]})}
                        min={150}
                        max={200}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center font-source text-luxury-gold font-bold text-lg">
                        {bodyParams.height} см
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="font-source font-semibold text-luxury-black">Вес (кг)</label>
                    <div className="space-y-2">
                      <Slider
                        value={[bodyParams.weight]}
                        onValueChange={(value) => setBodyParams({...bodyParams, weight: value[0]})}
                        min={40}
                        max={120}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center font-source text-luxury-gold font-bold text-lg">
                        {bodyParams.weight} кг
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="font-source font-semibold text-luxury-black">Размер</label>
                    <div className="flex gap-2 justify-center">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <Button
                          key={size}
                          variant={bodyParams.size === size ? "default" : "outline"}
                          size="sm"
                          onClick={() => setBodyParams({...bodyParams, size})}
                          className={bodyParams.size === size ? 
                            "bg-luxury-gold text-luxury-white" : 
                            "border-luxury-gray text-luxury-black hover:bg-luxury-gold hover:text-luxury-white"
                          }
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button className="bg-luxury-black hover:bg-luxury-gold text-luxury-white font-source px-8">
                    <Icon name="Search" size={20} className="mr-2" />
                    Подобрать образы
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Categories Section */}
      <section className="py-16 bg-luxury-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-luxury-black mb-4">
              Ценовые категории
            </h2>
            <p className="font-source text-luxury-gray max-w-2xl mx-auto">
              Готовые комплекты для любого бюджета и случая
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {outfitCategories.map((category, index) => (
              <Card key={index} className={`border-luxury-gray/20 ${category.color} hover:shadow-xl transition-all`}>
                <CardHeader className="text-center">
                  <Badge className="w-fit mx-auto mb-4 bg-luxury-black text-luxury-white">
                    {category.title}
                  </Badge>
                  <CardTitle className="font-playfair text-2xl text-luxury-black mb-2">
                    {category.price}
                  </CardTitle>
                  <p className="font-source text-luxury-gray">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center font-source text-luxury-black">
                        <Icon name="Check" size={16} className="text-luxury-gold mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-luxury-black hover:bg-luxury-gold text-luxury-white font-source">
                    Посмотреть комплекты
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wardrobe Analysis Section */}
      <section className="py-16 bg-luxury-warm/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-luxury-black mb-4">
              Анализ личного гардероба
            </h2>
            <p className="font-source text-luxury-gray mb-8 max-w-2xl mx-auto">
              Загрузите фотографии вашей одежды, и ИИ проанализирует ваш стиль, 
              найдет недостающие элементы и предложит идеальные дополнения
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-luxury-gray/20 border-dashed border-2 hover:border-luxury-gold transition-colors">
                <CardContent className="p-8 text-center">
                  <Icon name="Upload" size={48} className="text-luxury-gray mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-luxury-black mb-2">
                    Загрузить фото гардероба
                  </h3>
                  <p className="font-source text-luxury-gray mb-4">
                    Сфотографируйте одежду или загрузите готовые снимки
                  </p>
                  <Button className="bg-luxury-black hover:bg-luxury-gold text-luxury-white font-source">
                    Выбрать файлы
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-luxury-gray/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-gold/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="BarChart3" size={32} className="text-luxury-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-luxury-black mb-2">
                    Получить анализ
                  </h3>
                  <ul className="space-y-2 font-source text-luxury-gray text-left">
                    <li>• Стилевой профиль гардероба</li>
                    <li>• Цветовая палитра одежды</li>
                    <li>• Недостающие базовые элементы</li>
                    <li>• Рекомендации по обновлению</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stylists Section */}
      <section className="py-16 bg-luxury-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-luxury-white mb-4">
            Персональные стилисты
          </h2>
          <p className="font-source text-luxury-gray mb-12 max-w-2xl mx-auto">
            Получите консультацию от профессиональных стилистов 
            для создания эксклюзивных образов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="bg-luxury-white border-luxury-gray/20">
                <CardContent className="p-6 text-center">
                  <img src="/img/647acd46-dfcf-41f0-894f-4cd4dae180b6.jpg" alt="Fashion Stylist" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="font-playfair text-xl font-semibold text-luxury-black mb-2">
                    Стилист {index}
                  </h3>
                  <p className="font-source text-luxury-gray mb-4">
                    Специалист по luxury-сегменту с опытом работы в ведущих домах моды
                  </p>
                  <Button size="sm" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-white border-t border-luxury-gray/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-playfair text-2xl font-bold text-luxury-black mb-4">
                LUXURY WARDROBE
              </div>
              <p className="font-source text-luxury-gray">
                ИИ-платформа персонального стиля
              </p>
            </div>
            <div>
              <h3 className="font-source font-semibold text-luxury-black mb-4">Сервисы</h3>
              <ul className="space-y-2 font-source text-luxury-gray">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Подбор одежды</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Анализ гардероба</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-source font-semibold text-luxury-black mb-4">Поддержка</h3>
              <ul className="space-y-2 font-source text-luxury-gray">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-source font-semibold text-luxury-black mb-4">Контакты</h3>
              <div className="space-y-2 font-source text-luxury-gray">
                <p>info@luxurywardrobe.com</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
          </div>
          <div className="border-t border-luxury-gray/20 mt-8 pt-8 text-center">
            <p className="font-source text-luxury-gray">
              © 2024 Luxury Wardrobe. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;